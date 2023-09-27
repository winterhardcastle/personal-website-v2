/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#2F2F2F",
        white: "#F7F7F7",
        reseda: "#7B7554",
        orange: "#BA5624",
      },
    },
  },
  plugins: [],
};
