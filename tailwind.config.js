module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        intro: "url('/assets/images/IntroBg.png')",
        about: "url('/assets/images/AboutBg.png')",
        projects: "url('/assets/images/ProjectsBg.png')",
        contact: "url('/assets/images/ContactBg.png')",
      }),
      backgroundColor: {
        this: "rgba(255, 255, 255, 0.8)",
      },
      colors: {
        Tblack: "#1F2937",
      },
    },
  },
  plugins: [],
};
