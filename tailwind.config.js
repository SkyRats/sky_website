module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        dark: '#454545',
        DEFAULT: '#969696',
        light: '#f7f7f7',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
