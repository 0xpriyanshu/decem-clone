/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'acuminlight': ['Acuminprolight', 'sans-serif'],
        'acuminmedium': ['Acuminpromedium', 'sans-serif'],
        'acuminthin': ['Acuminthin', 'sans-serif'],
        'canelalight': ['Canelalight','slab-serif'],
        'baskerville': ['Baskerville','sans-serif']
      },
    },
  },
  plugins: [],
}

