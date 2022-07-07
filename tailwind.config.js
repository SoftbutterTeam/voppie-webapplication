module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xt: ".60rem",
        ti: ".70rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
