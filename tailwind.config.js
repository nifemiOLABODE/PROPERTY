/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        flow: {
          dark: '#0D1117',
          obsidian: '#141821',
          cream: '#FAF9F6',
          sand: '#F4F2EC',
          gold: '#C5A059',
          'gold-hover': '#B28E46',
          emerald: '#00A859',
          'emerald-dark': '#008546',
          muted: '#6E7681',
          border: '#E2DFD7',
          'border-dark': '#2D333B',
        }
      },
      fontFamily: {
        serif: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'elevated': '0 12px 40px -4px rgba(0, 0, 0, 0.12)',
        'luxury': '0 24px 60px -12px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
