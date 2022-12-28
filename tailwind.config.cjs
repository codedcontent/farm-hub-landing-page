/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#678983",
      },
      fontFamily: {
        sans: ["Jacques Francois", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
