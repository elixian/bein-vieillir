
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Roboto", "sans-serif"],
      },
      colors:{
        'bv-green': 'rgb(var(--color-green))',
        'bv-grey-2': 'rgb(var(--color-grey-2))',
        'bv-beige': 'rgb(var(--color-beige))',
        'bv-purple': 'rgb(var(--color-purple))',
      }
    },
  },
  plugins: [],
}