/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx}',
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        light_violet : "#eff1f7" ,
        Cyanc: 'hsl(180, 66%, 49%)',
        Dark_Violet: 'hsl(257, 27%, 26%)',
        Grayish: 'hsl(0, 0%, 75%)',
        Grayish_Violet: 'hsl(257, 7%, 63%)',
        Dark_Blue: 'hsl(255, 11%, 22%)',
        very_Dark_Violet: 'hsl(260, 8%, 14%)'
                
      }
    },
  },
  plugins: [],
}