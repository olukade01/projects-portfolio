import AngleArrow from "../../public/assets/vectors/AngleArrow";

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
      className="flex justify-center h-[762px] bg-about dark:bg-dark-about bg-no-repeat bg-cover bg-center"
    >
      <div className="flex flex-col mt-32 max-w-[600px]">
        <p className="text-lg dark:text-[#B9B9B9]">ABOUT ME</p>
        <p className="text-[40px] font-bold">A bit about me</p>
        <p className=" dark:text-[#B9B9B9] text-lg mb-12 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          nunc ultrices ac mauris, quis erat consequat odio. Pretium aliquet
          nunc eget consectetur diam felis justo. Tempor ornare nunc facilisi
          amet. Sed dui orci, ut pharetra. Vulputate id lectus laoreet sagittis
          non. <br /> <br /> Pharetra purus quam mauris malesuada etiam nullam.
          Ultrices nec in massa consequat erat iaculis leo.{" "}
        </p>
        <div className=" flex">
          <div className=" mr-16">
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
      </div>
    </div>
  );
};

export default About;
