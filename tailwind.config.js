/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        dark:'#111116',
        gray:'#1B1B1F',
        grayLight:'#F7F7F7',
        accent:'#eaeaea',
        accent2:'#292929'

      },
      fontFamily:{
        primary:["Outfit", 'sans-serif']
      }
    },
  },
  plugins: [],
}