import LightMode from "../../public/assets/vectors/LightMode";
import DarkMode from "../../public/assets/vectors/DarkMode";

const Navigation = ({ setTheme, theme }) => {
  return (
    <div className="flex items-center justify-between mx-[207px] h-14">
      <div className=" font-bold">OLUKADE MUZZAMMIL</div>
      <div className="flex items-center gap-8">
        <a href="#about">
          <span className=" font-medium">About</span>
        </a>
        <a href="#projects">
          <span className=" font-medium">Work</span>
        </a>
        <a href="#contact">
          <span className=" font-medium">Contact</span>
        </a>
        <div
          className="bg-[#E5E7EB] dark:bg-[#1F2937] w-8 h-8 rounded flex items-center justify-center cursor-pointer"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <LightMode /> : <DarkMode />}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
