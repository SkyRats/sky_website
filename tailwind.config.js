module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        dark: "#1c1f22",
        DEFAULT: "#46494c",
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
