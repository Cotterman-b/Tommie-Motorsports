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
        'mulish': [ 'MULISH', 'sans-serif'],
        'boldfonts': ['Impact,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif' ],
        'helvbased': ['Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif'],
      },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

