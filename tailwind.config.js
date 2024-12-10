/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'instrument': ['Instrument Sans', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #fde1ff, #e1ffea22 60%)',
      },
      keyframes: {
        leFlyInTop: {
          '0%': { transform: 'translate(0px, -80px)', opacity: '0' },
          '50%': { 
            transform: 'translate(10px, 50px)', 
            'animation-timing-function': 'ease-in-out' 
          },
        },
      },
      animation: {
        leFlyInTop: 'leFlyInTop 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
