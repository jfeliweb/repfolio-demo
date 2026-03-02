import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mocha: {
          50: 'rgb(244 241 241)',
          100: 'rgb(232 227 227)',
          300: 'rgb(186 171 172)',
          200: 'rgb(209 199 200)',
          400: 'rgb(163 143 145)',
          500: 'rgb(140 115 117)',
          600: 'rgb(112 92 93)',
          700: 'rgb(84 69 70)',
          800: 'rgb(56 46 47)',
          900: 'rgb(28 23 23)',
        },
        charcoal: {
          50: 'rgb(240 242 245)',
          100: 'rgb(225 230 234)',
          200: 'rgb(195 204 213)',
          300: 'rgb(165 179 192)',
          400: 'rgb(135 154 171)',
          500: 'rgb(105 128 150)',
          600: 'rgb(84 103 120)',
          700: 'rgb(63 77 90)',
          800: 'rgb(42 51 60)',
          900: 'rgb(21 26 30)',
        },
        fern: {
          50: 'rgb(238 246 240)',
          100: 'rgb(222 237 226)',
          200: 'rgb(188 220 197)',
          300: 'rgb(155 202 167)',
          400: 'rgb(121 185 138)',
          500: 'rgb(88 167 109)',
          600: 'rgb(70 134 87)',
          700: 'rgb(53 100 65)',
          800: 'rgb(35 67 44)',
          900: 'rgb(18 33 22)',
        },
        brightFern: {
          50: 'rgb(238 249 235)',
          300: 'rgb(152 220 137)',
          400: 'rgb(118 208 98)',
          600: 'rgb(67 157 47)',
          800: 'rgb(34 79 23)',
          900: 'rgb(17 39 12)',
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
