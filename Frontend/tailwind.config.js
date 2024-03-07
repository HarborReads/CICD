/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-light-maroon': '#faefed', // Very light maroon color code
        'brown': '#8A3324',
        'light-brown': '#c45643',
        'nav-brown': '#b56355',
        'nav-bg': '#f5d2cb',
        'icon-bg': '#b56859',
        'right-orange':'#d6833c',
        'green': '#25541e',
      },
    },
  },
  plugins: [],
}