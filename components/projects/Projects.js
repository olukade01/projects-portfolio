import Project from "./Project";
import LeftArrow from "../assets/LeftArrow";
import RightArrow from "../assets/RightArrow";

const projectArray = [
  {
    img: "",
    alt: "",
    title: "Project Title",
    desc: "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
  },
  {
    img: "",
    alt: "",
    title: "Project Title",
    desc: "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
  },
  {
    img: "",
    alt: "",
    title: "Project Title",
    desc: "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
  },
];

const Projects = () => {
  return (
    <div className="mb-52">
      <p className="text-lg">FEATURED PROJECTS</p>
      <div className="flex justify-between">
        <p className="text-[40px] text-Tblack font-bold">
          Stuff I&#39;ve Worked On 📁
        </p>
        <div className="flex">
          <div className="w-10 h-10 rounded-md flex justify-center items-center border border-gray-300">
            {<LeftArrow />}
          </div>
          <div className="w-10 h-10 rounded-md  justify-center items-center flex border border-gray-300 ml-4">
            {<RightArrow />}
          </div>
        </div>
      </div>
      <div className="flex overflow-x-scroll">
        {projectArray.map(({ title, desc }, index) => (
          <Project key={index} text1={title} text2={desc} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
