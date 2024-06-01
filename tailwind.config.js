import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: { max: "767px" },
        md: { min: "768px", max: "1200px" },
        lg: { min: "1201px", max: "1400px" },
        xl: { min: "1401px" },
        "2xl": { min: "1601px" },
      },
      backgroundColor: {
        base: "#505F4E",
        secondary: "#505F4E",
        third: "#F1FDF6",
        green: "#22BB87",
        dash: "#F1F1F1",
      },
      borderColor: {
        base: "#505F4E",
        secondary: "#018457",
      },
      textColor: {
        base: "#505F4E",
        secondary: "#018457",
        third: "#22BB87",
        grey: "#676F7D",
      },
      borderRadius: {
        sm: "10px",
      },
      fontSize: {
        def: "16px",
      },
    },
  },
  plugins: [nextui()],
};
