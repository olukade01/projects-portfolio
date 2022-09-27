import Image from "next/image";
import React from "react";
import Button from "../Button";
import Arrow from "../../public/assets/vectors/DiagonalArrow";
import Github from "../../public/assets/vectors/Github";
import Linkedin from "../../public/assets/vectors/LinkedIn";
import Codepen from "../../public/assets/vectors/Codepen";
import Twitter from "../../public/assets/vectors/Twitter";
import Image1 from "../../public/assets/images/image1.png";
import { motion } from "framer-motion";
export const variant = {
  hidden: { x: 90, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const contactArray = [
  {
    logo: <Github />,
    darkLogo: <Github color="white" />,
    name: "Github",
    icon: <Arrow />,
  },
  {
    logo: <Linkedin />,
    darkLogo: <Linkedin color="white" />,
    name: "Linkedin",
    icon: <Arrow />,
  },
  {
    logo: <Codepen />,
    darkLogo: <Codepen color="white" />,
    name: "Codepen",
    icon: <Arrow />,
  },
  {
    logo: <Twitter />,
    darkLogo: <Twitter color="white" />,
    name: "Twitter",
    icon: <Arrow />,
  },
];

const Contact = ({ theme }) => {
  const email = "adebayo0209@gmail.com";
  return (
    <div
      id="contact"
      className="bg-contact dark:bg-dark-contact bg-no-repeat bg-cover h-[55rem]"
    >
      <motion.div
        initial="hidden"
        variants={variant}
        whileInView="visible"
        className="pt-28 md:px-12 container mx-auto"
      >
        <div className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] md:p-12 p-6 mx-3 rounded-2xl flex items-center justify-between">
          <div className="">
            <p className="text-lg text-[#E5E7EB] dark:text-[#313131]">
              CONTACT
            </p>
            <p className="text-3xl font-bold text-white dark:text-[#1F2937] mb-6">
              Let work together
            </p>
            <div className="hidden sm:block">
              <a href={`mailto:${email}`}>
                <Button message opacity font size text={email} />
              </a>
            </div>
            <div className="sm:hidden">
              <a href={`mailto:${email}`}>
                <Button message opacity font size text="message" />
              </a>
            </div>
          </div>
          <div className="p-4 rounded-full bg-opacity-50 bg-white">
            <Image className="" src={Image1} alt="img" />
          </div>
        </div>
        <div className="p-12">
          <p className="text-lg mb-2">SOCIALS</p>
          <div className="md:grid-cols-2 grid gap-8">
            {contactArray.map((contact, index) => (
              <a
                href={`${
                  index === 0
                    ? "https://github.com/olukade01"
                    : index === 1
                    ? "https://www.linkedin.com/in/olukade-muzzammil-111138192/"
                    : index === 2
                    ? "https://codepen.io/olukade"
                    : "https://twitter.com/OlukadeM"
                }`}
                target="_blank"
                rel="noreferrer"
                key={`index_${index}`}
              >
                <Button
                  logo
                  icon
                  logoo={theme === "light" ? contact.logo : contact.darkLogo}
                  iconn={contact.icon}
                  width
                  font
                  size
                  text={contact.name}
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
