/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main' : '#005A94'
        
      },
      boxShadow: {
        '3xl': "20px 20px 20px rgba(0, 0, 0, 0.1), -20px -20px 20px rgba(0, 0, 0, 0.1), 20px -20px 20px rgba(0, 0, 0, 0.1), -20px 20px 20px rgba(0, 0, 0, 0.1)",
      },
    }, 
  },
  plugins: [],
}