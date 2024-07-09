/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundPosition: {
      "top-center": "top center",
    },
    backgroundSize: {
      130: "auto 130%",
    },
    fontFamily: {
      "ica-rubik": ["ICA Rubik", "sans-serif"],
    },
    extend: {
      animation: {
        autorun: "rotate360 20s linear infinite",
      },
      keyframes: {
        rotate360: {
          "0%": {
            transform: "perspective(1000px) rotateX(-16deg) rotateY(0deg)",
          },
          "100%": {
            transform: "perspective(1000px) rotateX(-16deg) rotateY(359deg)",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '2px #d2d2d2',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
