import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#002A22",
        accent: "#D4FF00",
        champagne: "#F5E6CA",
        surface: "#00382e",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #D4FF00, 0 0 10px #D4FF00" },
          "100%": { boxShadow: "0 0 20px #D4FF00, 0 0 30px #D4FF00" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
