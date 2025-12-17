/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Make sure this is set to 'class'
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        dark: '#1f2937',
        light: '#f9fafb',
      },
      textAlign: {
        'justify': 'justify',
      },
    },
  },
  plugins: [],
}