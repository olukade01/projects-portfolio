import Image from "next/image";
import React from "react";
import Button from "../Button";
import Arrow from "../../public/assets/vectors/DiagonalArrow";
import Github from "../../public/assets/vectors/Github";
import Linkedin from "../../public/assets/vectors/LinkedIn";
import Codepen from "../../public/assets/vectors/Codepen";
import Twitter from "../../public/assets/vectors/Twitter";
import Image1 from "../../public/assets/images/image1.png";
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
  return (
    <div
      id="contact"
      className="bg-contact dark:bg-dark-contact bg-no-repeat bg-cover h-[727px]"
    >
      <div className="pt-28 mx-[207px]">
        <div className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] p-12 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-lg text-[#E5E7EB] dark:text-[#313131]">
              CONTACT
            </p>
            <p className="text-3xl font-bold text-white dark:text-[#1F2937] mb-6">
              Let work together
            </p>
            <Button opacity font size text="adebayo0209@gmail.com" />
          </div>
          <div className="flex w-[152px] h-[152px] rounded-full justify-center items-center bg-opacity-50 bg-white">
            <Image src={Image1} alt="img" />
          </div>
        </div>
        <div className="p-12">
          <p className=" text-lg mb-2">SOCIALS</p>
          <div className="flex flex-wrap gap-10">
            {contactArray.map((contact, index) => (
              <a
                className="w-[588px]"
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
      </div>
    </div>
  );
};

export default Contact;
