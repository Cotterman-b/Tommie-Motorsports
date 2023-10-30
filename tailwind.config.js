/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
],
  theme: {
       
    extend: {
      colors: {
        'text': '#130e01',
        'background': '#fdf6ff',
        'primary': '#9531B1',
        'secondary': '#4B1273',
        'accent': '#35ff17',
      },
      backgroundImage: {
        'carArches': "url('images/fountain.jpg')"
      }
      },
      backdropBrightness: {
        35: '.35',
      },
      fontFamily: {
        'mulish': [ 'MULISH', 'sans-serif']
      },
  },
  plugins: [
  ],
}

