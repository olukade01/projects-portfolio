import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Introduction from "../components/introduction/Introduction";
import Navigation from "../components/navigation/Navigation";
import Projects from "../components/projects/Projects";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className="flex bg-projects dark:bg-dark-projects h-screen overflow-hidden flex-col">
      <Navigation setTheme={setTheme} theme={theme} />
      <div className="overflow-auto">
        <Introduction theme={theme} />
        <About />
        <Projects theme={theme} />
        <Contact theme={theme} />
        <footer className="flex justify-center py-2 items-center">
          <p className="text-sm mr-2">Copyright © 2022 </p>
          <p className="font-bold"> OLUKADE MUZZAMMIL</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
