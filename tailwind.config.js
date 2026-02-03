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
          DEFAULT: '#F59E0B', // Amber-500
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#FBBF24', // Amber-400
          foreground: '#111827',
        },
        background: '#0F172A', // Slate-900
        foreground: '#F8FAFC', // Slate-50
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
