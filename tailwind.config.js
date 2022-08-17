/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundColor:{
        mainBG:"hsl(217, 54%, 11%)",
        cardBG:"hsl(216, 50%, 16%)",
        lightcyan:"#E0FFFF"
      },
      colors:{
        "softb":"hsl(215, 51%, 70%)",
        "cyan":"hsl(178, 100%, 50%)"
      },
      fontFamily:{
        outfit: ["Outfit"]
      },
      content:{
        view:'url("/images/icon-view.svg")'
      }
    },
  },
  plugins: [],
}
