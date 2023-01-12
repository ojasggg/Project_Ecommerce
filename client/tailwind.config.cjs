/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1366px",
      xl: "1920px",
    },
    extend: {
      colors: {
        primary: "#161828",
        secondary: "#27293D",
        highlight: "#2A977D",
        dim: "#3A3B46",
        advertise: "#2A8A97",
        gray: "#666564",
        background: "#F1F3F4",
        bg_secondary: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
