/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981', // Emerald-500
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#059669', // Emerald-600
          foreground: '#FFFFFF',
        },
        background: '#000000', // Pure Black
        foreground: '#F8FAFC', // Slate-50
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
