/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',

        // Complex site-specific row configuration
        layout: '200px minmax(900px, 1fr) 100px',
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 1 / span 11',
      },
    },
    screens: {
      si: '769px',
      md: '900px',
      lg: '1201px',
      xxl: '1341px',
      xl: '1500px', // this is the "design resolution",
      max: '1919px',
      maxw: { max: '1603px' },
      m2xl: { max: '1340px' },
      mxl: { max: '1260px' },
      mlg: { max: '1024px' },
      mmd: { max: '768px' },
      mml: { max: '468px' },
      msm: { max: '375px' },
      mmax: { max: '1919px' },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
