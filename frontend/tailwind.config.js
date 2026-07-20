/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF4D00',
        'brand-offwhite': '#F4F3ED',
        'brand-dark': '#0A0A0A',
        'brand-card': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}