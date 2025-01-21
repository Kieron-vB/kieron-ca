/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFAEC',
        accent: '#FFCA38',
        text: '#000000',
        link: '#0066FF',
      },
      fontFamily: {
        headings: ['var(--font-scheherazade-new)'],
        body: ['var(--font-scheherazade-new)'],
        buttons: ['var(--font-figtree)'],
	writing: ['var(--font-caveat)'],
      },
      fontSize: {
	      'mobile': '3vh',
	      'desktop': '5vh',
      },
      letterSpacing: {
	      tight: '-0.05em',
	      'paragraph': '-0.03em', 
      },
      lineHeight: {
	      tight: '0.7',
	      'paragraph': '1.0'
      },
      boxShadow: {
        'inner-accent': 'inset 8px 8px #FFCA38, inset -1px -1px 6px rgba(255, 202, 56, 0.1)',
      },
      spacing: {
	      'standard': '2rem',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.button': {
          '@apply pb-4 pt-5 px-6 rounded bg-background text-text text-base font-buttons transition-all duration-200 ease-in-out': {},
          '&:active': {
            '@apply shadow-inner-accent': {},
          },
        },
        '.button span': {
          '@apply relative inline-block transition-transform': {},
        },
        '.button:active span': {
          '@apply translate-x-2 translate-y-2 duration-200': {},
        },
      });
    },
  ],
};
