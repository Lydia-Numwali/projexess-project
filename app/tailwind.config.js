/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
mode: "jit",
  theme: {
    extend: {
      colors:{
        "button-blue":"3AA1FF",
        "background-color":""
      },
      fontFamily:{
        dmsans:["DM Sans","sans-serrif"],
        monteserrat:["Monteserrat","sans-serif"]
      },
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060",
    },
  },
  plugins: [],
}

