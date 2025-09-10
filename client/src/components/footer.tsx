import { env } from "@/lib/env";
import { useState } from "react";
import ftfcCoinImage from "../assets/ftfc-coin.jpg";
import { FaXTwitter, FaTelegram, FaDiscord, FaReddit } from "react-icons/fa6";
import { SiCoinmarketcap, SiCoingecko } from "react-icons/si";
import { TbChartLine } from "react-icons/tb";

export default function Footer() {
  const [logoFallback, setLogoFallback] = useState(false);
  
  const cryptoLinks = [
    { 
      name: "X (Twitter)", 
      url: env.TWITTER, 
      icon: FaXTwitter,
      color: "hover:text-white"
    },
    { 
      name: "CoinMarketCap", 
      url: "#", // Will be replaced with actual URL
      icon: SiCoinmarketcap,
      color: "hover:text-blue-400"
    },
    { 
      name: "CoinGecko", 
      url: "#", // Will be replaced with actual URL
      icon: SiCoingecko,
      color: "hover:text-green-400"
    },
    { 
      name: "DexScreener", 
      url: "#", // Will be replaced with actual URL
      icon: TbChartLine,
      color: "hover:text-ftf-teal"
    },
  ];

  const socialLinks = [
    { 
      name: "Telegram", 
      url: env.TELEGRAM, 
      icon: FaTelegram,
      color: "hover:text-blue-400"
    },
    { 
      name: "Discord", 
      url: env.DISCORD, 
      icon: FaDiscord,
      color: "hover:text-indigo-400"
    },
    { 
      name: "Reddit", 
      url: env.REDDIT, 
      icon: FaReddit,
      color: "hover:text-orange-400"
    },
  ];

  return (
    <footer className="py-16 bg-ftf-deeppurple border-t border-ftf-gold/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Logo & Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                {!logoFallback ? (
                  <img
                    src={ftfcCoinImage}
                    alt="FTFC Coin"
                    className="w-12 h-12 rounded-full object-cover"
                    onError={() => setLogoFallback(true)}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ftf-gold to-ftf-teal"></div>
                )}
                <span className="font-urban text-2xl font-bold text-ftf-gold">FTFC</span>
              </div>
              <p className="text-sm opacity-80 max-w-xs mx-auto md:mx-0">
                The anti-farming revolution starts here. No yields, just builds.
              </p>
            </div>

            {/* Crypto Platforms */}
            <div className="text-center">
              <h3 className="font-urban text-lg font-bold text-ftf-gold mb-4">Track $FTFC</h3>
              <div className="flex justify-center space-x-4">
                {cryptoLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-2xl transition-colors ${link.color}`}
                      aria-label={link.name}
                      data-testid={`crypto-link-${link.name.toLowerCase().replace(/[()\s]/g, '-')}`}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h3 className="font-urban text-lg font-bold text-ftf-gold mb-4">Community</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-2xl transition-colors ${link.color}`}
                      aria-label={link.name}
                      data-testid={`social-link-${link.name.toLowerCase()}`}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-ftf-gold/20 pt-8">
            <div className="text-center space-y-4">
              <p className="text-sm opacity-80">
                © 2024 FTFC Coin. No rights reserved. Fuck the farmers. Not financial advice.
              </p>
              <p className="text-xs opacity-60 max-w-4xl mx-auto leading-relaxed">
                <strong>Disclaimer:</strong> FTFC is a meme coin with no intrinsic value, no expectation of financial return, and no formal team or roadmap. 
                This is not an investment. Only spend what you can afford to lose completely. This website contains no financial advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
