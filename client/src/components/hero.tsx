import { Button } from "@/components/ui/button";
import { env } from "@/lib/env";
import { useToast } from "@/hooks/use-toast";
import { Copy, Rocket, TrendingUp } from "lucide-react";

export default function Hero() {
  const { toast } = useToast();

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(env.TOKEN_ADDRESS);
      toast({
        title: "Contract Copied!",
        description: "Contract address copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy contract address",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ftf-purple via-ftf-deeppurple to-ftf-purple opacity-90"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Coin Logo */}
        <div className="mx-auto w-80 h-80 mb-8 coin-shadow float-animation">
          <img
            src="/logo.svg"
            alt="FTF Coin - Fuck The Farmers"
            className="w-full h-full object-contain"
            data-testid="hero-logo"
          />
        </div>

        <h1 className="font-display text-6xl md:text-8xl font-bold mb-4 tracking-tight">
          <span className="text-gradient" data-testid="hero-title-line1">FUCK THE</span><br />
          <span className="text-ftf-gold" data-testid="hero-title-line2">FARMERS</span>
        </h1>

        <p className="text-xl md:text-2xl mb-2 opacity-90 font-semibold" data-testid="hero-subtitle">
          We don't yield, we <span className="text-ftf-gold">BUILD</span>
        </p>

        <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto" data-testid="hero-description">
          The first meme coin that says FUCK FARMERS. No crop yields, no harvest promises.
          Just pure, unfiltered anti-agricultural sentiment.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            className="btn-cta px-8 py-4 text-lg"
            onClick={() => window.open(env.BUY_URL, '_blank')}
            data-testid="hero-buy-button"
          >
            <Rocket className="mr-2" size={20} />
            BUY $FTF
          </Button>
          <Button
            className="btn-teal px-8 py-4 text-lg"
            onClick={() => window.open(env.CHART_URL, '_blank')}
            data-testid="hero-chart-button"
          >
            <TrendingUp className="mr-2" size={20} />
            CHART
          </Button>
          <Button
            onClick={copyContract}
            className="border-2 border-ftf-gold text-ftf-gold px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wide hover:bg-ftf-gold hover:text-ftf-deeppurple transition-all"
            data-testid="hero-copy-button"
          >
            <Copy className="mr-2" size={20} />
            COPY CONTRACT
          </Button>
        </div>

        {/* Live Market Data */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-4 text-center" data-testid="market-price">
            <div className="text-2xl font-bold text-ftf-gold">$0.0042</div>
            <div className="text-sm opacity-80">Price</div>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center" data-testid="market-cap">
            <div className="text-2xl font-bold text-ftf-teal">$4.2M</div>
            <div className="text-sm opacity-80">Market Cap</div>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center" data-testid="market-volume">
            <div className="text-2xl font-bold text-ftf-lilac">$420K</div>
            <div className="text-sm opacity-80">24h Volume</div>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center" data-testid="market-holders">
            <div className="text-2xl font-bold text-ftf-gold">6,969</div>
            <div className="text-sm opacity-80">Holders</div>
          </div>
        </div>
      </div>
    </section>
  );
}
