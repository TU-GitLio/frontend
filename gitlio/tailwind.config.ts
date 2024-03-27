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
        backGray: "#F1F3F5",
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

  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
