/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      primary: "hsla(210, 44%, 94%, 1)",
      accent: "hsla(229, 100%, 66%, 1)",
      blue: "hsla(197, 100%, 61%, 1)",
      nightblue:"hsla(214, 84%, 15%, 1)", 
      transparant: "hsla(0,0%,0%,0)",
      gray: "hsla(0, 0%, 83%, 1)",
      black: "hsla(0, 0%, 0%, 1)",
      white: "white",
    },
  },
  plugins:[], 
};