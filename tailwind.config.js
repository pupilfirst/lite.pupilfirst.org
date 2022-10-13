module.exports = {
  content: ["./pages/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        inter:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
      },
      colors: {
        primary: {
          50: "#FDFAF7",
          100: "#FCEEE2",
          200: "#F9DBC1",
          300: "#F7BD8D",
          400: "#F6904D",
          500: "#FD6400",
          600: "#E05900",
          700: "#C75000",
          800: "#9E3F00",
          900: "#803300",
        },
        secondary: {
          50: "#F6F1FD",
          100: "#E7DBFA",
          200: "#D0BAF2",
          300: "#B186EA",
          400: "#8A57DB",
          500: "#6436B0",
          600: "#4D1E9B",
          700: "#3E1A74",
          800: "#2F1457",
          900: "#28114B",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
