/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    backgroundColor:{
      primary: '#fbbf24',
      secondary: '#a71979'
    },
    colors: {
      primary: '#fbbf24',
      secondary: '#fbbf24',
      transparent: 'transparent',
      current: 'currentColor',
      'alfa-orange': '#fbbf24',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca'
    },
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      'garden'
    ],
  }
}