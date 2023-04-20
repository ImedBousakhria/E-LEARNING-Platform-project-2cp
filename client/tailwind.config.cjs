/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      primary: "hsla(210, 44%, 94%, 1)",
      accent: "hsla(229, 100%, 66%, 1)",
      blue: "hsla(197, 100%, 61%, 1)",
      red: "hsla(0, 100%, 67%, 1)",
      nightblue: "hsla(214, 84%, 15%, 1)",
      navy: "hsla(182, 73%, 63%, 1)",
      transparant: "hsla(0,0%,0%,0)",
      lightgray: "hsla(0, 0%, 92%, 1)", 
      gray: "hsla(0, 0%, 83%, 1)",
      darkgray: "hsla(0, 0%, 72%, 1)",
      verydarkgray: "hsla(0, 0%, 83%, 1)",
      black: "hsla(0, 0%, 0%, 1)",
      white: "white",
      assignmentbg: "hsla(210, 44%, 94%, 1)",
      primary1: "#E8EFF6",
      black: "hsla(0, 0%, 0%, 1)",
      red:"#DA2F43",
      green:"#5CE1E6",
    },
  },
  plugins: [],
};
