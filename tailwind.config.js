module.exports = {
  mode:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      bc: "#050D21",
      primary: "#FFFDFB",
      secondary: "#B46CF8",
      danger: "#1A67F8",
      lightGrey: "#C9D5EE",
    },
    extend: {},
  },
  plugins: [],
};
