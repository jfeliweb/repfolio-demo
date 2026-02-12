import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mocha: {
          50: 'rgb(244 241 241)',
          100: 'rgb(232 227 227)',
          200: 'rgb(209 199 200)',
          600: 'rgb(112 92 93)',
          900: 'rgb(28 23 23)',
        },
        charcoal: {
          600: 'rgb(84 103 120)',
          700: 'rgb(63 77 90)',
          900: 'rgb(21 26 30)',
        },
        fern: {
          50: 'rgb(238 246 240)',
          100: 'rgb(222 237 226)',
          500: 'rgb(88 167 109)',
          600: 'rgb(70 134 87)',
          700: 'rgb(53 100 65)',
        },
        brightFern: {
          400: 'rgb(118 208 98)',
          600: 'rgb(67 157 47)',
        },
        yellowGreen: {
          500: 'rgb(161 230 25)',
          600: 'rgb(129 184 20)',
        },
      },
      keyframes: {
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-10px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        modalSlideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          '0%, 60%, 100%': { transform: 'translateY(0)', opacity: '0.7' },
          '30%': { transform: 'translateY(-10px)', opacity: '1' },
        },
        weatherPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease',
        'modal-slide-up': 'modalSlideUp 0.3s ease',
        typing: 'typing 1.4s infinite',
        'weather-pulse': 'weatherPulse 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-in',
      },
    },
  },
  plugins: [],
};

export default config;
