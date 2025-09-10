import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { env } from "@/lib/env";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const endpoint = env.NEWSLETTER_ENDPOINT || "/api/subscribe";
      await apiRequest("POST", endpoint, { email });
      toast({
        title: "Success!",
        description: "You've joined the anti-farming revolution!",
      });
      setEmail("");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to subscribe. Please try again.";
      toast({
        title: "Subscription Failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-ftf-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-ftf-gold" data-testid="newsletter-title">
            JOIN THE REVOLUTION
          </h2>
          <p className="text-xl mb-8 opacity-90" data-testid="newsletter-description">
            Get updates on our anti-farming activities. No spam, just chaos.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4" data-testid="newsletter-form">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-ftf-deeppurple border border-ftf-gold text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-ftf-gold"
              disabled={isLoading}
              data-testid="newsletter-email-input"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="btn-cta px-8 py-4"
              data-testid="newsletter-submit-button"
            >
              <Send className="mr-2" size={16} />
              {isLoading ? "SUBSCRIBING..." : "SUBSCRIBE"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
