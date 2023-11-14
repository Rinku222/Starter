/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/typography")],
  extendUtilities: {
    ".h-vh": { height: "var(--tw-vh)" },
  },
  theme: {
    extend: {
      colors: {
        "primary-gray": "#a8a8b0",
        "gray-shade-1": "#bbbcc0",
        "gray-shade-2": "#b5b6bb",
        "gray-shade-3": "#dcdbe1",
        "gray-shade-4": "#e3ddf4",
        "gray-shade-5": "#a1a1a9",
        "gray-shade-6": "#c4c4cc",
        "gray-shade-7": "#c0c0ca",
        "primary-blue": "#483eff",
        "active-step-back": "#c6e9ff",
        error: "#d05e69",
        "purple-shade-1": "#102148",
        "background-shade": "#eef5ff",
        "selected-plane-bg": "#f8f9fe",
        "selected-hover-border": "#9f9dc6",
        "selected-addon-border": "#f3f1ff",
        "price-color": "#7a76c0",
      },
    },
  },
};
