import Project from "./Project";

const Projects = () => {
  return (
    <div className="mb-52">
      <p className="text-lg">FEATURED PROJECTS</p>
      <div className="flex justify-between">
        <p className="text-[40px] text-Tblack font-bold">
          Stuff I&#39;ve Worked On 📁
        </p>
        <div className="flex">
          <div className="w-10 h-10 rounded-md justify-center items-center border border-gray-300"></div>
          <div className="w-10 h-10 rounded-md justify-center items-center border border-gray-300 ml-4"></div>
        </div>
      </div>
      <div className="flex overflow-x-scroll">
        <Project
          text1="Project Title"
          text2="Fill your project brief here. It can be the outcome of the project, or
        some success metrics, or a cheesy tagline."
        />
        <Project
          text1="Project Title"
          text2="Fill your project brief here. It can be the outcome of the project, or
        some success metrics, or a cheesy tagline."
        />
        <Project
          text1="Project Title"
          text2="Fill your project brief here. It can be the outcome of the project, or
        some success metrics, or a cheesy tagline."
        />
      </div>
    </div>
  );
};

export default Projects;
