module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "newxl": "1200px",
        "3xl": "2000px",
        "4xl": "2410px",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('@tailwindcss/line-clamp')],
}