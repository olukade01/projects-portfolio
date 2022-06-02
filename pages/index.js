import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Introduction from "../components/introduction/Introduction";
import Navigation from "../components/navigation/Navigation";
import Projects from "../components/projects/Projects";

const index = () => {
  return (
    <div className="px-[207px] pt-5">
      <Navigation />
      <Introduction />
      <About />
      <Projects />
      <Contact />
      <div className="flex justify-center items-center mb-3">
        <p className="text-sm mr-2">Copyright © 2022 </p>
        <p className="font-bold text-Tblack"> OLUKADE MUZZAMMIL</p>
      </div>
    </div>
  );
};

export default index;
