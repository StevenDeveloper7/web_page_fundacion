/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      teal: colors.teal,
      orange: colors.orange,
      pink: colors.pink,
      indigo: colors.indigo,
      sky: colors.sky,
      slate: colors.slate,
      green: colors.green,
      flc: {
        yellow: '#FBFF1A',
        greenLight: '#3de830',
        greenDark: '#057a09',
        blueWhite: '#e0feff',
        black: '#232e2e',
        orange: '#f0b410'
      }
    },
    extend: {}
  },
  plugins: []
}
