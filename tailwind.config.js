/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
      },
      fontFamily: {
        elvis: ['Playfair Display', 'serif'], // A elegant font that matches Elvis's era
      },
    },
  },
  plugins: [],
} 