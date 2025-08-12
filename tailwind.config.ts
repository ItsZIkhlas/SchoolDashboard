import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamaSky: "#FFB3B3", // soft coral pink
        lamaSkyLight: "#FFECEC", // pale blush
        lamaPurple: "#7ED957", // fresh green
        lamaPurpleLight: "#E8FCD9", // light mint
        lamaYellow: "#FF8C42", // warm orange
        lamaYellowLight: "#FFF3E0", // soft cream
      },
    },
  },
  plugins: [],
};
export default config;
