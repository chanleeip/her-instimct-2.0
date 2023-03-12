/** @type {import('tailwindcss').Config} */
const tailwindCSSAnimista =require("tailwindcss-animistacss")
const animista__defaults = require('tailwindcss-animistacss/animista__defaults')
module.exports = {
  content:["./templates/*html"],
  theme: {
    extend: {
      colors:{
        'beige':'rgb(247, 200, 224)',
        'gr':'rgba(253, 253, 253, 0.8)'
      },
      height:{
        'ext':'1000px',
      },
      width:{
        'ext':'55rem',
      },
      fontFamily:{
        'body':['Pacifico','cursive'],
        'quotes':['Great Vibes','cursive'],
        'div':['Roboto Condensed','sans-serif']
      },
      letterSpacing:{
        'rombha':'0.25rem'
      }
    }
  },
  plugins: [
    tailwindCSSAnimista({
      classes:['animate__tracking-in-expand','animate__focus-in-expand','animate__focus-in-contract-bck','animate__text-shadow-drop-right'],
      settings:{
        'animate__tracking-in-expand':{
          duration:1000,
          delay:10,
          iterationCounts:1,
          isInfinite:false,
        },
        'animate__focus-in-expand':{
          duration:1000,
          delay:1,
          iterationCounts:3,
          isInfinite:false,
        },
        'animate__focus-in-contract-bck':{
          duration:5000,
          delay:1,
          iterationCounts:3,
          isInfinite:false,
        },
        'animate__text-shadow-drop-right':{
          duration:5000,
          delay:1,
          iterationCounts:3,
          isInfinite:false,
        },
      },
      variants:["responsive"]
    })
  ],
}

