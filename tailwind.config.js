/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#F54748"
      },
      width: {
        "desktop": "1200px",
        "hp":"90%"
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}