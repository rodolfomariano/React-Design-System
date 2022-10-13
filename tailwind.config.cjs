/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      '2xs': 12,
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },
    colors: {
      gray: {
        900: '#242424',
        800: '#262626',
        700: '#2C2C2C',
        500: '#75726C',
        300: '#B0B0AC',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },
      cyan: {
        500: '#61DAFB',
      },
      green: {
        500: '#4FDE45',
      },
      red: {
        700: '#FF2E2E',
      },
      transparent: 'transparent',
      yellow: {
        500: '#FFB400',
        600: '#D69804',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
        header: 'Nunito, sans-serif',
      }
    },
  },
  plugins: [],
}
