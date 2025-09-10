import { Button } from "@/components/ui/button";
import { env } from "@/lib/env";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Copy, ExternalLink } from "lucide-react";

export default function HowToBuy() {
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

  const steps = [
    {
      number: 1,
      title: "Get a Solana Wallet",
      description: "Download Phantom, Solflare, or your preferred Solana wallet. Don't use a farming wallet.",
    },
    {
      number: 2,
      title: "Fund Your Wallet",
      description: "Buy SOL from any exchange and transfer to your wallet. Skip the farm-to-table nonsense.",
    },
    {
      number: 3,
      title: "Swap on Raydium",
      description: "Go to Raydium DEX, paste the FTFC contract address, and swap your SOL for $FTFC.",
    },
    {
      number: 4,
      title: "HODL & Spread",
      description: "Hold your $FTFC with diamond hands and spread the anti-farming revolution!",
    },
  ];

  return (
    <section id="how-to-buy" className="py-20 bg-gradient-to-b from-ftf-purple to-ftf-deeppurple">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-12 text-ftf-gold" data-testid="how-to-buy-title">
            HOW TO BUY
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start space-x-4" data-testid={`step-${step.number}`}>
                  <div className="bg-ftf-gold text-ftf-deeppurple w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 text-ftf-gold">{step.title}</h3>
                    <p className="opacity-90">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-8" data-testid="contract-info">
              <h3 className="font-display text-2xl font-bold mb-6 text-ftf-gold text-center">Contract Address</h3>
              <div className="bg-ftf-deeppurple rounded-lg p-4 mb-4">
                <code className="text-sm break-all font-mono" data-testid="contract-address">
                  {env.TOKEN_ADDRESS}
                </code>
              </div>
              <Button
                onClick={copyContract}
                className="w-full btn-cta py-3 mb-6"
                data-testid="copy-contract-button"
              >
                <Copy className="mr-2" size={16} />
                Copy Contract Address
              </Button>
              
              <div className="space-y-3">
                <Button
                  onClick={() => window.open(env.BUY_URL, '_blank')}
                  className="w-full btn-teal py-3"
                  data-testid="buy-raydium-button"
                >
                  <ArrowRight className="mr-2" size={16} />
                  Buy on Raydium
                </Button>
                <Button
                  onClick={() => window.open(env.CHART_URL, '_blank')}
                  className="w-full border-2 border-ftf-gold text-ftf-gold py-3 rounded-full font-bold uppercase tracking-wide hover:bg-ftf-gold hover:text-ftf-deeppurple transition-all"
                  data-testid="view-chart-button"
                >
                  <ExternalLink className="mr-2" size={16} />
                  View Chart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
