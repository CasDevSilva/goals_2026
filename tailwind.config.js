/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#040F0F',
        'forest-green': '#248232',
        'jungle': '#2BA84A',
        'jet-black': '#2D3A3A',
        'porcelain': '#FCFFFC',
      }
    },
  },
  plugins: [],
}