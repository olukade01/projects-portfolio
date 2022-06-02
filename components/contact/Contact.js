import Image from "next/image";
import React from "react";
import Button from "../Button";

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
        <p>SOCIALS</p>
        <div className="flex flex-wrap">
          <Button width text="Github" />
          <Button width text="Linkedin" />
          <Button width text="Codepen" />
          <Button width text="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
