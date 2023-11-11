/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
],
  theme: {
       
    extend: {
      colors: {
        'text': '#130e01',
        'background': '#ffffff',
        'primary': '#9531B1',
        'secondary': '#4B1273',
        'accent': '#35ff17',
        'background-dark': '#202020'
      },
      backgroundImage: {
        'carArches': "url('images/fountain.jpg')"
      }
      },
      backdropBrightness: {
        35: '.35',
        20: '.2'
      },
      fontFamily: {
        'mulish': [ 'MULISH', 'sans-serif']
      },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

