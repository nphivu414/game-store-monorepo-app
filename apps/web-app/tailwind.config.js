module.exports = {
  content: ['./apps/web-app/src/**/*.{js,ts,jsx,tsx}', './libs/ui-web/src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
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
      lineClamp: {
        10: '10',
      },
    },
  },
};
