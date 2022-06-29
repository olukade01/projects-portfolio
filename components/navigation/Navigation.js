import Mode from "../../public/assets/vectors/LightMode";

// const navOption = [{ title: "About" }, { title: "Work" }, { title: "Option" }];

const Navigation = () => {
  return (
    <div className="flex items-center justify-between mx-[207px] h-14">
      <div className="text-Tblack font-bold">OLUKADE MUZZAMMIL</div>
      <div className="flex items-center gap-8">
        <a href="#about">
          <span className="text-Tblack font-medium">About</span>
        </a>
        <a href="#projects">
          <span className="text-Tblack font-medium">Work</span>
        </a>
        <a href="#contact">
          <span className="text-Tblack font-medium">Contact</span>
        </a>
        <div className="bg-[#E5E7EB] w-8 h-8 rounded flex items-center justify-center cursor-pointer">
          <Mode />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
