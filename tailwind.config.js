/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        orange: "#FF7F27",
        purple: "#7E57C2",
        green: "#4CAF50",
        pink: "#E91E63",
        blue: "#03A9F4",
        gray: "#424242",
        stone: "#1c1917",
        lightGray: "#BDBDBD",
        skin: "#e28962",
        pink_one: "#a22864",
        tan: "#724909",
        light_purple: "#a26fcd",
        light_green: "#58935b",
        Pitch_black: "#090606",
        off_white: "#fefefe",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Primary font
        jetbrains: ["JetBrains Mono", "monospace"], // Secondary font
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
