const { themeConfigs } = require('./lib/themes/themeConfig');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  important: '#__next',
  theme: {
    extend: {
      colors: {
        ...themeConfigs.light.colors,
      },
      fontFamily: {
        poppins: themeConfigs.light.typography.fontFamily.split(',')[0].replace(/['"]+/g, ''),
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
} 