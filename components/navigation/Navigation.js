const navOption = [{ title: "About" }, { title: "Work" }, { title: "Option" }];

const Navigation = () => {
  return (
    <div className="flex justify-between mb-[135px]">
      <div className="text-Tblack font-bold">OLUKADE MUZZAMMIL</div>
      <div className="flex items-center indent-8">
        <a>
          <span className="text-Tblack font-medium">About</span>
        </a>
        <a>
          <span className="text-Tblack font-medium">Work</span>
        </a>
        <a>
          <span className="text-Tblack font-medium">Contact</span>
        </a>
        <div className="ml-6 bg-[#E5E7EB] w-8 h-8 rounded flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default Navigation;
