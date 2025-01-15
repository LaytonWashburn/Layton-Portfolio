/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: {
          50: '#ADBBDA',
          100: '#8697C4'
        },
        white: {
          50: '#EDE8F5'
        }
      }
    },
  },
  plugins: [],
}

