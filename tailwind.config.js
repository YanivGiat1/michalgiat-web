/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: { 100: '#faf8f4', 200: '#f3efe6', 300: '#e9e2d3' },
        ink: { 950: '#1c1c1a', 800: '#33322d', 600: '#5a5850', 400: '#8a887d' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
