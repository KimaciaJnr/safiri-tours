/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E8732A',
          'orange-hover': '#D4621C',
          terracotta: '#C96A2B',
          'terracotta-dark': '#B15F25',
          gold: '#C5A46D',
          'gold-light': '#F7D9A6',
        },
        teal: {
          DEFAULT: '#0F5B5B',
          light: '#2D6A6A',
        },
        cream: {
          DEFAULT: '#F7F1E5',
          light: '#FAF8F5',
          soft: '#F8F3EC',
          sand: '#EFE5D9',
        },
        ink: {
          DEFAULT: '#1E2928',
          deep: '#1C2026',
        },
        line: {
          DEFAULT: '#E7DDD0',
          alt: '#EFE7DF',
          soft: '#E7E0D6',
          mid: '#C9B9A1',
        },
      },
    },
  },
  plugins: [],
};