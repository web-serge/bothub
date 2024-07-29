/** @type {import('tailwindcss').Config} */
import tailwindcssGradients from 'tailwindcss-gradients'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        md: '2.5rem',
        xl: 0,
      },
    },
    extend: {
      keyframes: {
        'new-message': {
          '0%': {
            transform: 'translateY(100px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      },
      animation: {
        'new-message': 'new-message 1s ease-in-out',
      },
      backgroundImage: {
        'bg-grid': 'url(./src/assets/bg-grid.svg)',
        'elipse-blue': 'url(./src/assets/ellipse-blue.png)',
        'elipse-pink': 'url(./src/assets/ellipse-pink.png)',
        'custom-radial-top-left': 'radial-gradient(circle at top left, #1C64F2 -90%, #121825 75%)',
        'custom-radial-top-center': 'radial-gradient(circle at top, #1C64F2 -165%, #121825 30%)',
        gradient: 'linear-gradient(to right, #1C64F2 8%, #121825 100%)',
      },
      width: {
        select: 'var(--radix-select-trigger-width)',
      },
      colors: {
        dark: '#0E0C15',
        primary: '#1C64F2',
        'gray-1': '#616D8D',
        'gray-2': '#313E62',
        'gray-3': '#222B44',
        'gray-4': '#121825',
        'gray-5': '#374151',
      },
      screens: {
        xl: '1290px',
      },
    },
  },
  plugins: [tailwindcssGradients],
}
