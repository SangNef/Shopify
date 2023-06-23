/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "up": {
          "0%": { transform: "translateY(50px)" },
          "100%": { transform: "translateY(0)" },
        },
        "down" : {
          "0%": { transform: "translateY(-50px)"},
          "100%": {transform: "translateY(0)"}
        }
      },
      animation: {
        "up": "up 0.5s ease-in-out",
        "down": "down 0.5s ease-in-out"
      },
    },
  },
  plugins: [],
};
