import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Introduction from "../components/introduction/Introduction";
import Projects from "../components/projects/Projects";

const index = () => {
  return (
    <div className="">
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
