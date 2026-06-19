import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F2EDE8',
        parchment: '#E8E0D6',
        espresso: '#2D2926',
        charcoal: '#4A4540',
        gold: '#C9A96E',
        'gold-light': '#DFC08A',
        'gold-dark': '#A8844A',
        mist: '#F8F5F1',
        fog: '#EDE7E0',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
