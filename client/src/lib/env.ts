// Environment variables with fallbacks
export const env = {
  // Public site config
  TOKEN_SYMBOL: import.meta.env.VITE_TOKEN_SYMBOL || "FTF",
  TOKEN_NAME: import.meta.env.VITE_TOKEN_NAME || "Fuck The Farmers Coin",
  TOKEN_ADDRESS: import.meta.env.VITE_TOKEN_ADDRESS || "REPLACE_ME",
  CHAIN: import.meta.env.VITE_CHAIN || "solana",
  BUY_URL: import.meta.env.VITE_BUY_URL || "https://raydium.io/swap",
  CHART_URL: import.meta.env.VITE_CHART_URL || "https://dexscreener.com/solana",
  TWITTER: import.meta.env.VITE_TWITTER || "@ftfcoin",
  TELEGRAM: import.meta.env.VITE_TELEGRAM || "https://t.me/ftfcoin",
  DISCORD: import.meta.env.VITE_DISCORD || "https://discord.gg/ftfcoin",
  REDDIT: import.meta.env.VITE_REDDIT || "https://reddit.com/r/ftfcoin",
  ANALYTICS_ENABLED: import.meta.env.VITE_ANALYTICS_ENABLED === "true",
  PLAUSIBLE_DOMAIN: import.meta.env.VITE_PLAUSIBLE_DOMAIN || "ftfcoin.xyz",
};
