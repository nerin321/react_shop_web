/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      //* Scale
      scale: {
        '175': '1.75',
        '075': '0.75',
        '050': '0.50',
        '065': '0.65',
      },
      //* Box Shadown
      boxShadow: {
        'borderCard': '0px 0px 25px 0 rgba(0,0,0,0.1)',
      },
      //* Translate
      translate: {
        mid: '50%',
      },
      //* Letter Spacing
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        mainTitleLS: "0.795px"
      },
      //* Min Weight
      minWidth: {
        widthBtnSlider: '163px',
      },
      //* Min Height 
      minHeight: {
        heightBtnSlider: '50px',
      },
      //* Line Height
      lineHeight: {
        'zero': '0px',
        '12': '3rem',
        //* Px
        '28': '28px',
      },
      //* Font Size
      fontSize: {
        //* Rem
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",

        //* Px
        "14px": "14px",
        "17px": "17px",
        "18px": "18px",
        mainTitle: "53px",
        subTitle: "16px",
      },
      //* height
      height: {
        email : "52px",
      },
      //* Width
      width: {
        email : "432px",
        navbar: "1177px",
      },
      //* Font Size
      fontSize: {
        '17px': '17px',
        '32px': '32px',
        logo: '34px',
      },
      //* Line height
      lineHeight: {
        normal: 'normal',
      },
      //* Color
      colors: {
        white: "#FFF",
        pink: "#fb2e86",
        red: "#fb2448",
        blue: "#2f1ac4",
        offnavyblue: "#3f509e",
        navyblue: "#151875",
        skyblue: "#f1f3ff",
        pantonepurple: "#e0d3f5",
        violet: "#7e33e0",
        offpurple: "#9f63b5",
        offblue: "#151875",
        coolgrey: "#8A8FB9",
        cottoncandy: "#FEBAD7",
        electricpink: "#FB2E86"
        logincolor: "#9096B2",
        loginboder: "#C2C5E1",
        logocolor: '#0D0E43',
        bordersearch: '#E7E6EF',
        footerbg: '#EEEFFB',
        subtextcolor: '#8A8FB9',
      },
      //* Font Family
      fontFamily: {
        //* JosefinSans
        JosefinSansBold: ["JosefinSans-Bold", "sans-serif"],
        JosefinSansBoldItalic: ["JosefinSans-BoldItalic", "sans-serif"],
        JosefinSansExtraLight: ["JosefinSans-ExtraLight", "sans-serif"],
        JosefinSansExtraLightItalic: [
          "JosefinSans-ExtraLightItalic",
          "sans-serif",
        ],
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
  plugins: [require("flowbite/plugin")],
};
