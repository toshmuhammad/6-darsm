/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        triangle: "url(../images/uchburchak.svg)",
      },
    },
  },
  plugins: [require('daisyui')],
};