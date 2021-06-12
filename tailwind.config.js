module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "#333333",
        gray: "#787878",
        lightGray: "#f2f2f2",
      },
      fontFamily: {
        vollkorn: ["Vollkorn", "sans-serif"],
      },
      height: {
        xl: "34rem",
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
