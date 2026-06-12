import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aarde: "#8E5B3F",
        blad: "#3F7C65",
        klei: "#F2E7D8",
        lucht: "#DCEBE7",
        inkt: "#24322D",
        zon: "#F3B45B",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        zacht: "0 24px 60px rgba(36, 50, 45, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
