/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './page_html/*.{html,js}',
    './*.{html,js}',
  ], 
  theme: {
    extend: {},
    fontFamily: {
      'baskerville': ['"Libre Baskerville"', 'serif'],
  },
  plugins: [],
  }
}
