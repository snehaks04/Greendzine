/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'g':'#1A2C2C99',
        'cgreen':'#36A546',
        'darkg':'#36A546',
      'o':'#83571d'
      }
     
    },
  },
  plugins: [],
}

