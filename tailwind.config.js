/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      'gellix': ["Gellix", "sans-serif"],
      'alstoria': ["Alstoria", "serif"]
    }
  },
  plugins: [],
}