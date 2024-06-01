/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01AEF0",
        secondary: '#FF7900',
      },
      // font-size:{
      //   sm: "12px",
      //   base: "14px",
      //   lg: "18px",
      //   xl: "24px",
      //   2xl: "30px",
      // },
      borderRadius: {
        'xl': '20px',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
