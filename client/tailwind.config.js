import animatePlugin from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: {
          primary: '#f5f5f5',
          secondary: '#fefefb',
        },
        accent: {
          primary: '#fc7f58',
          secondary: '#75a9dd',
        },

        text: {
          primary: '#1d1d1d',
          secondary: '#6E6E6E',
        },

        status: {
          upcoming: '#df800c',
          inprogress: '#0060c7',
          completed: '#08911f',
          cancelled: '#d12323',
        },
      },

      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        card: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
