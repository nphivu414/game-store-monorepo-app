const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  mode: 'jit',
  purge: [
    './apps/web-app/src/**/*.{js,ts,jsx,tsx}',
    './apps/web-app/src/**/*.{js,ts,jsx,tsx}',
    createGlobPatternsForDependencies(__dirname)
  ],
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
