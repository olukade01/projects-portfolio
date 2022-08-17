import LightMode from "../../public/assets/vectors/LightMode";
import DarkMode from "../../public/assets/vectors/DarkMode";
import { useState } from "react";
import styles from "../../styles/utils.module.css";

const Navigation = ({ setTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="font-bold">OLUKADE MUZZAMMIL</div>
        <div className="flex items-center md:gap-8 gap-5">
          <div
            className="bg-[#E5E7EB] dark:bg-[#1F2937] w-8 h-8 rounded flex items-center justify-center cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <LightMode /> : <DarkMode />}
          </div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#about">About</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <button
            className={`block ${styles.hamburger} ${
              isOpen && styles.open
            } md:hidden focus:outline-none`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className={styles.hamburgerTop}></span>
            <span className={styles.hamburgerMiddle}></span>
            <span className={styles.hamburgerBottom}></span>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "mr-0" : "-mr-64"
        } md:hidden right-6 rounded-md top-0 space-y-6 flex flex-col items-center mt-16 fixed bg-gray-200 max-w-md font-bold p-5 px-8 z-10 transition-all duration-500 drop-shadow-lg`}
      >
        <a href="#about">About</a>
        <a href="#projects">Work</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;
