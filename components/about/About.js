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

const langArray = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JAVASCRIPT",
  },
];
const techArray = [
  {
    name: "REACT",
  },
  {
    name: "NODE",
  },
  {
    name: "EXPRESS",
  },
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          nunc ultrices ac mauris, quis erat consequat odio. Pretium aliquet
          nunc eget consectetur diam felis justo. Tempor ornare nunc facilisi
          amet. Sed dui orci, ut pharetra. Vulputate id lectus laoreet sagittis
          non. <br /> <br /> Pharetra purus quam mauris malesuada etiam nullam.
          Ultrices nec in massa consequat erat iaculis leo.{" "}
        </p>
        <div className="flex gap-2 sm:gap-16">
          <div>
            <p className="font-bold text-2xl mb-6">Languages</p>
            {langArray.map((lang, i) => (
              <div
                className="leading-8 flex items-center ml-2"
                key={`langindex_${i}`}
              >
                <div className="mr-6">{<AngleArrow />}</div> {lang.name}
              </div>
            ))}
          </div>
          <div>
            <p className="font-bold text-2xl mb-6">Technologies</p>
            {techArray.map((tech, i) => (
              <div
                className="leading-8 flex items-center ml-2"
                key={`langindex_${i}`}
              >
                <div className="mr-6">{<AngleArrow />}</div>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
