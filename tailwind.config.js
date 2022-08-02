module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "340px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontSize: {
        xt: ".60rem",
        ti: ".70rem",
      },
      colors: {
        primary: "#FF4D00",
        secondary: "#FF7400",
        tertiary: "#FF9A00",
        raikage: "#FFC100",
        "royal-blue": "#496DDB",
        "gray-1": "#E3E1E3",
        "gray-2": "#888888",
        "gray-3": "#4F4F4F",
        "black-1": "#2D2E36",
        "black-2": "#1B1A21",
        "black-3": "#2A2D3A",
        "black-4": "#24252D",
        "red-violet": "#DA18A3",
        "file-active": "#2196f3",
        "file-accept": "#00e676",
        "file-reject": "#ff1744",
        "overlay-black": "rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
