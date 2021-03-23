module.exports = {
  purge: ["index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      translate: ["active"],
    },
  },
  plugins: [],
}
