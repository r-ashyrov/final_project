/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: { 
      'tablet' : '640px',
      'phone'  : '425px',
      'phone-m': '375px',
      'phone-s': '320px'
    },
  },
  plugins: [],
}

