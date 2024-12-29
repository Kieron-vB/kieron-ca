import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        background: '#FFFAEC',
        accent: '#FFCA38',
        text: '#000000',
        link: '#0066FF',
      },
      fontFamily: {
        headings: ['Scheherazade New', 'serif'],
        body: ['Scheherazade New', 'serif'],
        buttons: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
