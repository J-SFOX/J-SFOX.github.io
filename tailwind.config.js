/** @type {import('tailwindcss').Config} */
const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "#f9f9ff",
        primaryBlue: "#353353",
        primaryRed: "#ff4b60",
        primaryBlack: "#161616",
      },
    },
  },
  plugins: [],
};
