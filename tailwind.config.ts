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
        headings: ['Scheherazade New', 'serif', 'tracking-wide'],
        body: ['Scheherazade New', 'serif'],
        buttons: ['Figtree', 'sans-serif'],
      },
      boxShadow:{
	      'inner-accent': 'inset 8px 8px #FFCA38, inset -1px -1px 6px rgba(255, 202, 56, 0.1)',
      },
    },
  },
  plugins: [
  function ({ addComponents }) {
	  addComponents({
		  ".button": {
  			"@apply py-4 px-6 rounded bg-background text-text text-base font-buttons transition-all duration-200 ease-in-out": {},
		  "&:active": {
			  "@apply shadow-inner-accent": {},
		 	 },
		  },
		  ".button span": {
			  "@apply relative inline-block transition-transform": {},
		  },
		  ".button:active span": {
			  "@apply translate-x-2 translate-y-2 duration-200": {},
		  },
	  });
  },
  ],
};

export default config;
