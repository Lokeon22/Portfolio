/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 5s linear infinite",
        modifyScale: "modifyScale 0.3s ease-in-out",
        changeOpDire: "changeOpDire 0.7s ease",
      },
      keyframes: {
        modifyScale: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        changeOpDire: {
          "100%": { opacity: "1", transform: "translateX(0px)" },
          "0%": { opacity: "0", transform: "translateX(-50px)" },
        },
      },
      fontFamily: {
        "Noto-Sans": ["'Noto Sans JP', sans-serif"],
      },
      colors: {
        "black-rgba": "rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
