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
        yellow: "#FFFF00",
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
        red: "#ff0000",
        light_blue: "#87CEEB",
        dark_blue: "#03055B",
        dark_green: "#006400",
        dark_red: "#8B0000",
        dark_orange: "#FF8C00",
        dark_purple: "#800080",
        dark_gray: "#333333",
        dark_yellow: "#FFD700",
        dark_pink: "#FF1493",
        dark_tan: "#964B00",
        dark_skin: "#8B4513",
        dark_light_purple: "#9370DB",
        gray_300: "#D1D5DB", // Light gray for text
        gray_400: "#9CA3AF", // Medium gray for text
        gray_500: "#6B7280", // Slightly darker gray for captions
        gray_700: "#374151", // Dark gray for buttons or containers
        gray_800: "#1F2937", // Very dark gray for card backgrounds
        gray_900: "#111827", // Darkest gray for section backgrounds
        gray_1000: "#171717", // Darkest gray for section backgrounds
        purple_hover: "#6C4BAF", // Slightly darker shade of purple for hover
        orange_hover: "#FF6A1D", // Slightly darker shade of orange for hover
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Primary font
        jetbrains: ["JetBrains Mono", "monospace"], // Secondary font
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
