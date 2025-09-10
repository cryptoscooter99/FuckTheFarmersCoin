import { env } from "@/lib/env";

export default function Footer() {
  const socialLinks = [
    { name: "Twitter", url: env.TWITTER, icon: "𝕏" },
    { name: "Telegram", url: env.TELEGRAM, icon: "📢" },
    { name: "Discord", url: env.DISCORD, icon: "💬" },
    { name: "Reddit", url: env.REDDIT, icon: "🔴" },
  ];

  return (
    <footer className="py-12 bg-ftf-deeppurple border-t border-ftf-gold/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0" data-testid="footer-logo">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ftf-gold to-ftf-teal"></div>
              <span className="font-display font-bold text-2xl text-ftf-gold">FTF COIN</span>
            </div>

            <div className="flex items-center space-x-6" data-testid="footer-social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-ftf-gold transition-colors"
                  aria-label={link.name}
                  data-testid={`social-link-${link.name.toLowerCase()}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-ftf-gold/20 text-center" data-testid="footer-legal">
            <p className="opacity-80">
              © 2024 FTF Coin. No rights reserved. Fuck the farmers. Not financial advice.
            </p>
            <p className="mt-2 text-sm opacity-60">
              Built by the community, for the community. No VCs, no farms, just vibes.
            </p>
            <p className="mt-4 text-xs opacity-50 max-w-3xl mx-auto">
              <strong>Legal Notice:</strong> FTF is a meme coin with no intrinsic value, no expectation of financial return, and no formal team or roadmap. 
              It is not an investment. Do not buy more than you can afford to lose. This site contains no financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
