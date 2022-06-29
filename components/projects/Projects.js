import Project from "./Project";
import LeftArrow from "../../public/assets/vectors/LeftArrow";
import RightArrow from "../../public/assets/vectors/RightArrow";
import Projectpic from "../../public/assets/images/ProjectImage.png";

const projectArray = [
  {
    img: Projectpic,
    alt: "project-pic",
    title: "Project Title",
    desc: "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
  },
  {
    img: Projectpic,
    alt: "project-pic",
    title: "Project Title",
    desc: "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
  },
  {
    img: Projectpic,
    alt: "project-pic",
    title: "Project Title",
    desc: "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-projects bg-no-repeat bg-cover bg-center h-[880px]"
    >
      <div className="pt-20 mx-[207px]">
        <p className="text-lg">FEATURED PROJECTS</p>
        <div className="flex justify-between">
          <p className="text-[40px] text-Tblack font-bold">
            Stuff I&#39;ve Worked On 📁
          </p>
          <div className="flex">
            <div className="cursor-pointer w-10 h-10 rounded-md flex justify-center items-center border border-gray-300">
              {<LeftArrow />}
            </div>
            <div className="cursor-pointer w-10 h-10 rounded-md  justify-center items-center flex border border-gray-300 ml-4">
              {<RightArrow className="" />}
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto w-[115%]">
          {projectArray.map(({ title, desc, alt, img }, index) => (
            <Project
              key={index}
              alt={alt}
              src={img}
              text1={title}
              text2={desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
