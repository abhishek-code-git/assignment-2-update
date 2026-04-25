import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37"
      },
      boxShadow: {
        glow: "0 0 60px rgba(212, 175, 55, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
