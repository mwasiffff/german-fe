/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#4361EE', // Main primary
          600: '#3730A3',
          700: '#312E81',
          800: '#1E1B4B',
          900: '#0F172A',
        },
        secondary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#7209B7', // Main secondary
          600: '#6D28D9',
          700: '#5B21B6',
          800: '#4C1D95',
          900: '#2E1065',
        },
        accent: {
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#4CC9F0', // Main accent
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
        dark: {
          100: '#1f2039',
          200: '#171830',
          300: '#13132b',
          400: '#0e0e20',
          500: '#0a0a18',
        },
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.primary.500), 0 0 20px theme(colors.primary.500)',
        'neon-purple': '0 0 5px theme(colors.secondary.500), 0 0 20px theme(colors.secondary.500)',
        'neon-blue': '0 0 5px theme(colors.accent.500), 0 0 20px theme(colors.accent.500)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #0a0a18, #13132b)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      backdropFilter: {
        'glass': 'blur(8px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};