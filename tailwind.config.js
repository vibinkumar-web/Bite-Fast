/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                brand: {
                    red: '#e74c3c',
                    darkred: '#c0392b',
                    orange: '#ff6b35',
                    darkgold: '#f39c12',
                },
            },
            backgroundImage: {
                'shimmer': 'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)',
            },
        },
    },
    plugins: [],
}
