// Environment variables with fallbacks
export const env = {
  // Public site config
  TOKEN_SYMBOL: import.meta.env.VITE_TOKEN_SYMBOL || "FTFC",
  TOKEN_NAME: import.meta.env.VITE_TOKEN_NAME || "Fuck The Farmers Coin",
  TOKEN_ADDRESS: import.meta.env.VITE_TOKEN_ADDRESS || "XxxtZghs6NRGjezReEpVV8REoDomGszov3jf8ARFTFC",
  CHAIN: import.meta.env.VITE_CHAIN || "solana",
  BUY_URL: import.meta.env.VITE_BUY_URL || "https://raydium.io/swap",
  CHART_URL: import.meta.env.VITE_CHART_URL || "https://dexscreener.com/solana",
  TWITTER: import.meta.env.VITE_TWITTER || "https://x.com/fuckthefarmers?s=21",
  TELEGRAM: import.meta.env.VITE_TELEGRAM || "https://t.me/ftfccoin",
  DISCORD: import.meta.env.VITE_DISCORD || "https://discord.gg/ftfccoin",
  REDDIT: import.meta.env.VITE_REDDIT || "https://reddit.com/r/ftfccoin",
  ANALYTICS_ENABLED: import.meta.env.VITE_ANALYTICS_ENABLED === "true",
  PLAUSIBLE_DOMAIN: import.meta.env.VITE_PLAUSIBLE_DOMAIN || "ftfccoin.xyz",

  // API config
  // If deploying the API separately (e.g. Render/Fly/Railway), set VITE_API_BASE_URL
  // to that origin (e.g. https://api.ftfccoin.xyz). For static-only newsletter,
  // set VITE_NEWSLETTER_ENDPOINT to a full external endpoint (e.g. Formspree URL).
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "",
  NEWSLETTER_ENDPOINT: import.meta.env.VITE_NEWSLETTER_ENDPOINT || "",
};
