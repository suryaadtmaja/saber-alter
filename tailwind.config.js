module.exports = {
  purge: ["./src/**/*.vue", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        "dark-text": "#092F39",
        "blue-base": "#0794B9",
        "secondary-blue": "#2F92AC",
        "gray-100": "#F7FAFC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
