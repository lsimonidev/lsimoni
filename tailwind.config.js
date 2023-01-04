/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lg-ligh-grey': '#e9e9e9',
        'lg-ligh-grey': '#e9e9e9',
        'lg-light-pink': '#4f4848',
      },
    },
    fontFamily: {
      Assistant: ['Assistant, sans-serif'],
    },
    container: {
      padding: '2rem',
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
    },
  },
  plugins: [],
};
