
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
        'bv-blue-bg': 'rgb(var(--color-blue-bg))',
        'bv-blue-200': 'rgb(var(--color-blue-200))',
        'bv-beige': 'rgb(var(--color-beige))',
        'bv-purple': 'rgb(var(--color-purple))',
        'bv-blue-hover': 'rgb(var(--color-blue-hover))'
      },
      maxWidth: {
        '8xl': '1440px',
      }
    },
  },
  plugins: [],
}