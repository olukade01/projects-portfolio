import Image from "next/image";
import React from "react";
import Button from "../Button";
import Arrow from "../assets/DiagonalArrow";
const contactArray = [
  {
    logo: <Arrow />,
    name: "Github",
    icon: <Arrow />,
  },
  {
    logo: <Arrow />,
    name: "Linkedin",
    icon: <Arrow />,
  },
  {
    logo: <Arrow />,
    name: "Codepen",
    icon: <Arrow />,
  },
  {
    logo: <Arrow />,
    name: "Twitter",
    icon: <Arrow />,
  },
];

const Contact = () => {
  return (
    <div className="mb-36">
      <div className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] p-12 rounded-2xl flex items-center justify-between">
        <div>
          <p className="text-lg text-[#E5E7EB]">CONTACT</p>
          <p className="text-3xl font-bold text-white mb-6">
            Let work together
          </p>
          <Button opacity font size text="adebayo0209@gmail.com" />
        </div>
        <div className="flex w-[152px] h-[152px] rounded-full justify-center items-center bg-opacity-50 bg-white">
          <Image
            width={50}
            height={50}
            src="/public/images/image.jpg"
            alt="img"
          />
        </div>
      </div>
      <div className="p-12">
        <p className="text-Tblack text-lg mb-2">SOCIALS</p>
        <div className="flex flex-wrap">
          {contactArray.map((contact, index) => (
            <Button
              key={`index_${index}`}
              logo
              icon
              logoo={contact.logo}
              iconn={contact.icon}
              width
              font
              size
              text={contact.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
