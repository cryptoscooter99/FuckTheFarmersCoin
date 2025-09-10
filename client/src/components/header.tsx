import { useState } from "react";
import { Menu, X } from "lucide-react";
import { env } from "@/lib/env";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 sticky-header">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ftf-gold to-ftf-teal"></div>
            <span className="font-display font-bold text-xl text-ftf-gold" data-testid="logo-text">FTFC</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-ftf-gold transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('tokenomics')}
              className="hover:text-ftf-gold transition-colors"
              data-testid="nav-tokenomics"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection('how-to-buy')}
              className="hover:text-ftf-gold transition-colors"
              data-testid="nav-how-to-buy"
            >
              How to Buy
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="hover:text-ftf-gold transition-colors"
              data-testid="nav-roadmap"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-ftf-gold transition-colors"
              data-testid="nav-faq"
            >
              FAQ
            </button>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              className="btn-cta px-4 py-2 text-sm"
              onClick={() => window.open(env.BUY_URL, '_blank')}
              data-testid="header-buy-button"
            >
              BUY
            </Button>
            <Button
              className="btn-teal px-4 py-2 text-sm"
              onClick={() => window.open(env.CHART_URL, '_blank')}
              data-testid="header-chart-button"
            >
              CHART
            </Button>
            <Button
              onClick={copyContract}
              className="border border-ftf-gold text-ftf-gold px-4 py-2 rounded-full text-sm font-bold hover:bg-ftf-gold hover:text-ftf-deeppurple transition-all"
              data-testid="header-copy-button"
            >
              COPY
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-ftf-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 glass-card rounded-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-ftf-gold transition-colors"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('tokenomics')}
                className="text-left hover:text-ftf-gold transition-colors"
                data-testid="mobile-nav-tokenomics"
              >
                Tokenomics
              </button>
              <button
                onClick={() => scrollToSection('how-to-buy')}
                className="text-left hover:text-ftf-gold transition-colors"
                data-testid="mobile-nav-how-to-buy"
              >
                How to Buy
              </button>
              <button
                onClick={() => scrollToSection('roadmap')}
                className="text-left hover:text-ftf-gold transition-colors"
                data-testid="mobile-nav-roadmap"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left hover:text-ftf-gold transition-colors"
                data-testid="mobile-nav-faq"
              >
                FAQ
              </button>
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-ftf-gold/20">
                <Button
                  className="btn-cta w-full"
                  onClick={() => window.open(env.BUY_URL, '_blank')}
                  data-testid="mobile-buy-button"
                >
                  BUY $FTFC
                </Button>
                <Button
                  className="btn-teal w-full"
                  onClick={() => window.open(env.CHART_URL, '_blank')}
                  data-testid="mobile-chart-button"
                >
                  CHART
                </Button>
                <Button
                  onClick={copyContract}
                  className="border border-ftf-gold text-ftf-gold w-full rounded-full font-bold hover:bg-ftf-gold hover:text-ftf-deeppurple transition-all"
                  data-testid="mobile-copy-button"
                >
                  COPY CONTRACT
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
