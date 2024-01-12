/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'blue': '#2B63C0',
        'black': '#000000',
        'footer': '#292A2F',
        'lable': '#424242',
        'profile': '#0C2556',
        'gray': '#303030',
      },

      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
         'logo-text': '15px',
         'languages': '20px',
         'nav': '17px',
         'home-banner': '38px',
         'home-banner-btn': '25px',
         'heading-title': '35px',
         'categoriy-card': '20px',
         'categoriy-card-btn': '16px',
         'chemp-title': '18px',
         'profile-text': '15px',
         
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900
      },
      

    },
    screens: {
      'sm': '176px',
      // => @media (min-width: 176px) { ... }
      'md': '760px',
      // => @media (min-width: 860px) { ... }
      'lg': '1000px',
      // => @media (min-width: 1000px) { ... }
      'xl': '1300px',
      // => @media (min-width: 1100px) { ... }
    },
  },
  plugins: [
   
  ],
}
