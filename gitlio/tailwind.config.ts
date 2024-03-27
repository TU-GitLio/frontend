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
        primary: "#FFF",
        selected: "#e5e7eb",
        sideDark: "#1E293B",
        black: "#000000 !important",
      },
    },
    screens: {
      sm: { max: "768px" },
      md: { max: "1023px" },
      lg: { min: "1023px" },
      xl: { min: "1300px" },

      //전서진: 1273.7px (13.3인치, 33.7cm) -> lg
      //정준영: 1440px (15인치, 38.1cm)     -> xl

      // sm: { min: "265px", max: "768px" },
      // md: { min: "620px", max: "1023px" },
      // lg: { min: "1080px" },
      // xl: { min: "1300px" },
    },
    mode: "jit",
    darkMode: "class",
  },
  plugins: [require("daisyui")],
};
export default config;
