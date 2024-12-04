/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#1E3A5F',
          800: '#2A4A7F',
        },
      },
    },
  },
  plugins: [],
};