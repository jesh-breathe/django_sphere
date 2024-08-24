/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        trebuchetMs: ["Trebuchet MS", "sans-serif"],
      },
    },
  },
  plugins: [],
}
