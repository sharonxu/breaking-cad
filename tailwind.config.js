/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'steel': '#8899A6',
        'machine-orange': '#FF6B35',
        'off-black': '#0D1B2A',
        'off-white': '#F5F5F5',
        'chem-green': '#0F9B0F',
        'chem-yellow': '#D4AF37',
        'desert-tan': '#B5A642',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
