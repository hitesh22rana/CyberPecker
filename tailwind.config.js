module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
        "4xl": "2410px",
        "gridSm": "641px",
        "gridMd": "1280px",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}