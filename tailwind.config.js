/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",

      md: "750px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        gradient:
          "radial-gradient(150% 100% at 100% 20%, rgba(21, 203, 146, 0.75) 1%, rgba(248, 248, 252, 0) 92%), radial-gradient(150% 100% at 0% 20%, rgba(252, 204, 7, 0.69) 0%, rgba(248, 248, 252, 0) 97%), radial-gradient(75% 75% at 50% 50%, #FFFFFFFF 95%, #FFFFFFFF 100%)",
      },
      colors: {
        primaryOrange: "#FB960E",
        primaryRed: "#E81B1F",
        priamryLightYellow: "#FBECA0",
        primaryYellow: "#FCCC07",
      },
    },
  },
  plugins: [],
};
