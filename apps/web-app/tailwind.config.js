const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  purge: createGlobPatternsForDependencies(__dirname),
  darkMode: 'media', // or 'media' or 'class'
  plugins: [require('daisyui')],
    variants: {
    extend: {
      padding: ['first', 'last'],
    },
  },
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
  theme: {
    extend: {
      maxHeight: {
        initial: 'initial',
      },
    },
  },
};

// module.exports = {
//   plugins: [require('daisyui')],
//   mode: 'jit',
//   purge: ['/src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   variants: {
//     extend: {
//       padding: ['first', 'last'],
//     },
//   },
//   daisyui: {
//     styled: true,
//     themes: true,
//     base: true,
//     utils: true,
//     logs: true,
//     rtl: false,
//   },
//   theme: {
//     extend: {
//       maxHeight: {
//         initial: 'initial',
//       },
//     },
//   },
// };
