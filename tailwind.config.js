/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        popinsRegular: ['Popins', 'sans-serif'],
        popinsBold: ['Popins-Bold', 'sans-serif'],
        popinsExtraBold: ['Popins-ExtraBold', 'sans-serif'],
        popinsBoldItalic: ['Popins-BoldItalic', 'sans-serif'],
        popinsLight: ['Popins-Light', 'sans-serif'],
        popinsLightItalic: ['Popins-LightItalic', 'sans-serif'],
        popinsMedium: ['Popins-Medium', 'sans-serif'],
        popinsMediumItalic: ['Popins-MediumItalic', 'sans-serif'],
        popinsSemiBold: ['Popins-SemiBold', 'sans-serif'],
        popinsSemiBoldItalic: ['Popins-SemiBoldItalic', 'sans-serif'],
        popinsThin: ['Popins-Thin', 'sans-serif'],
        popinsThinItalic: ['Popins-ThinItalic', 'sans-serif'],
        popinsExtraLight: ['Popins-ExtraLight', 'sans-serif'],
        popinsExtraLightItalic: ['Popins-ExtraLightItalic', 'sans-serif'],
        popinsUltraLight: ['Popins-UltraLight', 'sans-serif'],
        popinsUltraLightItalic: ['Popins-UltraLightItalic', 'sans-serif'],
        popinsBlack: ['Popins-Black', 'sans-serif'],
        popinsBlackItalic: ['Popins-BlackItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
