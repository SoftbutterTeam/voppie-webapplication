module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'bg-dark-1': '#24252D',
        'bg-gray-1': '#E3E1E3',
        'bg-gray-2': '#888888',
        'bg-gray-3': '#4F4F4F',
        'bg-black-1': '#2D2E36',
        'bg-black-2': '#1B1A21',
        'bg-black-3': '#2A2D3A',
        'bg-black-4': '#24252D',
        'craft-black': '#121314',
        'red-violet': '#DA18A3',
        'sky-blue': '#2196f3',
        'success-green': '#00e676',
        'error-red': '#ff1744',
        'overlay-black': 'rgba(0, 0, 0, 0.8)',
      },
      width: {
        215: '215px',
        357: '357px',
        557: '557px',
      },
      minWidth: {
        130: '130px',
        155: '155px',
        190: '190px',
        215: '215px',
        240: '240px',
        256: '256px',
        327: '327px',
      },
      height: {
        300: '300px',
        557: '557px',
      },
      inset: {
        45: '45%',
        65: '65px',
      },
      spacing: {
        65: '65px',
      },
      flex: {
        2: '2 2 0%',
      },
      lineHeight: {
        70: '70px',
      },
      zIndex: {
        '-5': '-5',
        0: '0',
      },
    },
    screens: {
      lg: { min: '1800px' },
      md: { min: '990px' },
      sm: { min: '600px' },
      xs: { min: '400px' },
      minmd: '1700px',
      minlg: '2100px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
