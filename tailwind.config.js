/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary' : '#d97807',
        'onPrimary' : '#fafafa',
        'secondary' : '#000000',
      },
      fontFamily : {
        'display' : ['Poppins', 'sans-serif'],
        'body' : [ 'Inter', 'sans-serif']
      },
      backgroundSize: {
        'auto-70': 'auto 70%',
      },

    },
  },
  plugins: [],
}

