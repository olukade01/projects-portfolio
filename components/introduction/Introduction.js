import Button from "../Button";
import Image from "next/image";
import UpArrow from "../../public/assets/vectors/UpArrow";
import DownArrow from "../../public/assets/vectors/DownArrow";
import ProfilePic from "../../public/assets/images/profilePic.jpg";
import styled from "../../styles/utils.module.css";
import { motion } from "framer-motion";
export const variant = {
  hidden: { x: -90, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const Introduction = ({ theme }) => {
  return (
    <div className="bg-intro dark:bg-dark-intro bg-no-repeat bg-cover bg-center ">
      <div className="container mx-auto flex flex-col-reverse md:flex-row md:justify-between items-center pt-28 md:pt-40 pb-20 px-10 gap-16">
        <motion.div
          initial="hidden"
          variants={variant}
          whileInView="visible"
          className="flex flex-col md:w-1/2 space-y-10"
        >
          <h1 className="md:leading-snug font-bold text-left text-4xl md:text-5xl">
            Hi 👋
            <br /> I&apos;m Olukade Muzzammil
          </h1>
          <p className="max-w-xl">
            I Specialize on Javascript, ReactJS, Nextjs, web animation and
            responsive design. If you have a Cool Project in mind, need an
            online presence for your business or you are looking to hire, you
            can get in touch with me.
          </p>
          <div className="flex sm:flex-row justify-between max-w-lg md:flex-col lg:flex-row">
            <a href="#contact" className="mb-4 mr-2 text-sm md:text-[15px]">
              <Button
                className="w-[20rem]"
                icon
                iconn={
                  theme === "light" ? (
                    <UpArrow className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 duration-300" />
                  ) : (
                    <UpArrow
                      className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 duration-300"
                      color="#1F2937"
                    />
                  )
                }
                black
                text="Let's work together"
              />
            </a>
            <a href="#projects" className="text-sm md:text-[15px]">
              <Button
                icon
                bg
                iconn={
                  theme === "light" ? (
                    <DownArrow className="group-hover:translate-y-1.5 duration-300" />
                  ) : (
                    <DownArrow
                      className="group-hover:translate-y-1.5 duration-300"
                      color="#F9FAFB"
                    />
                  )
                }
                text="See some of my works"
              />
            </a>
          </div>
        </motion.div>
        <div className="w-[18rem] sm:w-[28rem]">
          <img
            className={`${styled.image} rounded-full`}
            src="http://www.diginextechnologies.com/images/creative_graphic_designing_company_ludhiana_punjab_india.gif"
            // src="/assets/images/profilePic.jpg"
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
