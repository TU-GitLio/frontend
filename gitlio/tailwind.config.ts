import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#DDE5FF",
      },
    },
    screens: {
      sm: { min: "265px", max: "768px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1023px" },
      xl: { min: "1300px" },
    },
    mode: "jit",
  },
  plugins: [],
};
export default config;
