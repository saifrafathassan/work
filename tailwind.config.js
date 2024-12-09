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
        '3xl': "15px 15px 15px rgba(0, 0, 0, 0.1), -15px -15px 15px rgba(0, 0, 0, 0.1), 15px -15px 15px rgba(0, 0, 0, 0.1), -15px 15px 15px rgba(0, 0, 0, 0.1)",
      },
    }, 
  },
  plugins: [],
}