module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        dark: "#171717",
        DEFAULT: "#454545",
        light: "#f7f7f7",
        lightest: "#ffffff",
      },
      transparent: "transparent",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
