/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      '2sm': '640px',
      md: '768px',
      '2md': '868px',
      lg: '1024px',
      '2lg': '1243px',
      xl: '1440px',
      '2xl': '2000px',
      '3xl': '2376px'
    },
    fontFamily: {
      main: ['Playfair Display', 'system-ui']
    },
    extend: {
      colors: {
        primary: 'gray-300',
        'primary-bold': 'gray-700'
      },
      backgroundImage: {
        home: 'url(../assets/img/home-hero-main.jpg)',
        polices: 'url(../assets/img/polices.jpg)',
        coronavirus: 'url(../assets/img/coronavirus.jpg)',
        people: 'url(../assets/img/people.jpg)',
        politics: 'url(../assets/img/politics.jpg)',
        war: 'url(../assets/img/war.jpg)',
      }
    },
  },
  plugins: [],
}
