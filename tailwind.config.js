/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      //* Color
      colors: {
        pink: '#fb2e86', 
        red: '#fb2448', 
        blue: '#2f1ac4', 
        offnavyblue: '#3f509e',
        navyblue: '#151875',
        skyblue: '#f1f3ff',
        pantonepurple: '#e0d3f5',
        purple: '#7e33e0',
        offpurple: '#9f63b5',
        offblue: '#151875'
      },
      //* Font Family
      fontFamily: {
        //* JosefinSans
        JosefinSansBold: ["JosefinSans-Bold", "sans-serif"],
        JosefinSansBoldItalic: ["JosefinSans-BoldItalic", "sans-serif"],
        JosefinSansExtraLight: ["JosefinSans-ExtraLight", "sans-serif"],
        JosefinSansExtraLightItalic: ["JosefinSans-ExtraLightItalic", "sans-serif"],
        JosefinSansItalic: ["JosefinSans-Italic", "sans-serif"],
        JosefinSansLight: ["JosefinSans-Light", "sans-serif"],
        JosefinSansLightItalic: ["JosefinSans-LightItalic", "sans-serif"],
        JosefinSansMedium: ["JosefinSans-Medium", "sans-serif"],
        JosefinSansMediumItalic: ["JosefinSans-MediumItalic", "sans-serif"],
        JosefinSansRegular: ["JosefinSans-Regular", "sans-serif"],
        JosefinSansSemiBold: ["JosefinSans-SemiBold", "sans-serif"],
        JosefinSansSemiBoldItalic: ["JosefinSans-SemiBoldItalic", "sans-serif"],
        JosefinSansThin: ["JosefinSans-Thin", "sans-serif"],
        JosefinSansThinItalic: ["JosefinSans-ThinItalic", "sans-serif"],

        //* Lato
        LatoBlack: ["Lato-Black", "sans-serif"],
        LatoBlackItalic: ["Lato-BlackItalic", "sans-serif"],
        LatoBold: ["Lato-Bold", "sans-serif"],
        LatoBoldItalic: ["Lato-BoldItalic", "sans-serif"],
        LatoItalic: ["Lato-Italic", "sans-serif"],
        LatoLight: ["Lato-Light", "sans-serif"],
        LatoLightItalic: ["Lato-LightItalic", "sans-serif"],
        LatoRegular: ["Lato-Regular", "sans-serif"],
        LatoThin: ["Lato-Thin", "sans-serif"],
        LatoThinItalic: ["Lato-ThinItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
