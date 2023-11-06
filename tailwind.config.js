/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#19303C",
        secondary: "#8C8FA7",
        grey: "#E8E8E8",
        orange: "#FFA665",
        homepage: "#E0DDDD",
        lightbrown: "#E3C8A1",
      },
      screens: {
        xxmobile: "361px",
        xmobile: "390px",
        mobile: "480px",
        lgMobile: "560px",
        xmd: "660px",
        md: "830px",
        laptop: "1024px",
        desktop: "1230px",
        lgDesktop: "1330px",
        extraLarge: "2000px",
      },
    },
  },
  plugins: [],
};
