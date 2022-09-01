/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "borderWidth": {
        "5": "5px",
      },
      "colors": {
        "yellow-shadow": "#ccc100",
      }
    },
  },
  plugins: [],
}
