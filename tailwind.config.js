/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      poppins: '"Poppins", sans-serif',
    },
    screens: {
        extrasmall: '320px',
      },
      colors:{
        'text-color': '#273240',
      },
    },
    
  },
  plugins: [],
}

