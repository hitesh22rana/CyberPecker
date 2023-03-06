const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                mono: ['Space Mono', ...defaultTheme.fontFamily.mono],
            },
            screens: {
                '3xl': '2000px',
                '4xl': '2410px',
                'max-screen': '2200px',
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        require('@tailwindcss/line-clamp'),
    ],
}
