module.exports = {
  content: [
    './apps/next-web-app/app/**/*.{js,ts,jsx,tsx}',
    './apps/next-web-app/pages/**/*.{js,ts,jsx,tsx}',
    './apps/next-web-app/components/**/*.{js,ts,jsx,tsx}',
    './libs/ui-web/src/**/*.{js,ts,jsx,tsx}'
  ],
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
