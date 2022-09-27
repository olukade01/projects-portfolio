import AngleArrow from "../../public/assets/vectors/AngleArrow";
import { motion } from "framer-motion";
export const variant = {
  hidden: { y: 90, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

// const langArray = [];
const techArray = [
  "HTML5 & (S)CSS",
  "Javascript(ES6+)",
  "React Native",
  "Reactjs",
  "TypeScript",
  "Nextjs",
  "Nodejs",
  "Express",
  "Redux",
  "Simpler State",
  "Mongoose",
  "graphQl",
];
const toolsArray = [
  "VsCode",
  "Git",
  "Github",
  "Gitlab",
  "Firebase",
  "Vercel",
  "Netlify",
  "Expo",
  "Heroku",
  "Trello",
  "Tailwindcss",
  "StyledComponent",
];

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center bg-about dark:bg-dark-about bg-no-repeat bg-cover bg-center"
    >
      <motion.div
        initial="hidden"
        variants={variant}
        whileInView="visible"
        className="flex flex-col mt-32 container pb-[12rem] px-10 max-w-[50rem]"
      >
        <p className="text-lg dark:text-[#B9B9B9]">ABOUT ME</p>
        <p className="text-4xl md:5xl font-bold">A bit about me</p>
        <p className=" dark:text-[#B9B9B9] text-lg mb-12 mt-5">
          I am a Frontend Software Engineer with 2 years of experience
          designing, developing, managing user interface and prioritizing user
          experience. An enthusiastic team player that can efficiently
          collaborate as part of a productive team and also able to effectively
          self-manage during independent projects.
          <br /> <br />
          In my spare time I find ways to better optimize code and enjoy
          learning new technologies.
        </p>
        <div className="flex justify-between sm:justify-around gap-y-8 flex-wrap gap-1">
          {/* <div>
            <p className="font-bold text-2xl mb-6">Languages</p>
            {langArray.map((lang, i) => (
              <div
                className="leading-8 flex items-center ml-2"
                key={`langindex_${i}`}
              >
                <div className="mr-4">{<AngleArrow />}</div>{" "}
                {lang.toUpperCase()}
              </div>
            ))}
          </div> */}
          <div>
            <p className="font-bold text-2xl mb-6">Technologies</p>
            {techArray.map((tech, i) => (
              <div
                className="leading-8 flex items-center "
                key={`langindex_${i}`}
              >
                <div className="mr-4">{<AngleArrow />}</div>
                {tech}
              </div>
            ))}
          </div>
          <div>
            <p className="font-bold text-2xl mb-6">Tools</p>
            {toolsArray.map((tool, i) => (
              <div
                className="leading-8 flex items-center"
                key={`langindex_${i}`}
              >
                <div className="mr-4">{<AngleArrow />}</div>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
