/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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