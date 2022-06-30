module.exports = {
  darkMode: "class",
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
        "dark-intro": "url('/assets/images/DarkIntroBg.png')",
        "dark-about": "url('/assets/images/DarkAboutBg.png')",
        "dark-projects": "url('/assets/images/DarkProjectsBg.png')",
        "dark-contact": "url('/assets/images/DarkContactBg.png')",
      }),
      backgroundColor: {
        project: "rgba(255, 255, 255, 0.8)",
        footer: "rgba(31, 41, 55, 1)",
      },
      colors: {
        Tblack: "#1F2937",
      },
    },
  },
  plugins: [],
};
