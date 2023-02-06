/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#21243D",
        secondary: "#4792FC",
        neutral: "#EEF1FA",
      },
      fontFamily: {
        sans: ["var(--font-rubik)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
