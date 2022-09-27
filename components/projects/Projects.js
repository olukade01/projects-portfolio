import Project from "./Project";
import LeftArrow from "../../public/assets/vectors/LeftArrow";
import RightArrow from "../../public/assets/vectors/RightArrow";
import Projectpic from "../../public/assets/images/ProjectImage.png";
import Hulupic from "../../public/assets/images/hulu.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const projectArray = [
  {
    img: Hulupic,
    alt: "Movie App",
    title: "Movie App",
    desc: "Movie app is a site for searching any movie, watching its trailer, viewing its details and seeing related movies",
    techStack: ["NextJs", "TailwindCss"],
    href: "https://movie-app-dun-kappa.vercel.app/",
  },
  // {
  //   img: Projectpic,
  //   alt: "project-pic",
  //   title: "Project Title",
  //   desc: "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
  // },
  // {
  //   img: Projectpic,
  //   alt: "project-pic",
  //   title: "Project Title",
  //   desc: "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
  // },
  // {
  //   img: Projectpic,
  //   alt: "project-pic",
  //   title: "Project Title",
  //   desc: "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
  // },
  // {
  //   img: Projectpic,
  //   alt: "project-pic",
  //   title: "Project Title",
  //   desc: "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
  // },
  // {
  //   img: Projectpic,
  //   alt: "project-pic",
  //   title: "Project",
  //   desc: "Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.",
  // },
];

const Projects = ({ theme }) => {
  const ref = useRef();
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      id="projects"
      className="bg-projects dark:bg-dark-projects bg-no-repeat bg-cover bg-center py-[2rem] md:h-[60rem]"
    >
      <div className="md:ml-40 ml-10">
        <p className="text-lg mb-4 dark:text-[#B9B9B9]">FEATURED PROJECTS</p>
        <div className="flex justify-between pr-6 md:pr-10 items-center">
          <p className="text-4xl md:text-4xl font-bold">
            Stuff I&#39;ve Worked On 📁
          </p>
          <div className="flex">
            <div
              className="cursor-pointer w-10 h-10 rounded-md flex justify-center items-center border border-gray-300 dark:border-[#4F4F4F]"
              onClick={() => ref.current.slickPrev()}
            >
              {theme === "light" ? <LeftArrow /> : <LeftArrow color="white" />}
            </div>
            <div
              className="cursor-pointer w-10 h-10 rounded-md  justify-center items-center flex border border-gray-300 dark:border-[#4F4F4F] ml-4"
              onClick={() => ref.current.slickNext()}
            >
              {theme === "light" ? (
                <RightArrow />
              ) : (
                <RightArrow color="white" />
              )}
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Slider ref={ref} {...settings}>
            {projectArray.map(
              ({ title, desc, alt, img, techStack, href }, index) => (
                <Project
                  key={index}
                  alt={alt}
                  src={img}
                  text1={title}
                  text2={desc}
                  technologyArray={techStack}
                  href={href}
                />
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
