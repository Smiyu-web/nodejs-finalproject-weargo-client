module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "#333333",
        gray: "#787878",
        gray2: "#b0b0b0",
        lightGray: "#f2f2f2",
        bg: "#EDD7C8",
        pink: "#F2BFAE",
        blue: "#BAD6D2"
      },
      fontFamily: {
        vollkorn: ["Vollkorn", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        league: ["League Script", "sans-serif"],
      },
      height: {
        sm: "28rem",
        md: "32rem",
        lg: "34rem",
        xl: "36rem",
        xxl: "40rem",
      },
    },
    screens: {
      all: "0px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
