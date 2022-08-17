import Image from "next/image";
import React from "react";
import Button from "../Button";

const buttonTextArray = [
  { text: "Mobile App" },
  { text: "Website" },
  { text: "SaaS" },
];

const Project = ({ alt, src, text1, text2 }) => {
  return (
    <div className="mt-12 mr-6 border-2 border-[#E5E7EB] dark:border-[#313131]  bg-project dark:bg-[#1F2937] p-6 rounded-[32px] ">
      <div className="mb-8 flex justify-center items-center bg-[#F5F5F5] opacity-80 min-h-[350px] rounded-[32px]">
        <Image alt={alt} src={src} />
      </div>
      <p className="font-medium text-2xl mb-4">{text1}</p>
      <p className="text-[17px] opacity-60 mb-4">{text2}</p>
      <div className="flex">
        {buttonTextArray.map(({ text }, index) => (
          <Button key={index} neutral sm sfont text={text} />
        ))}
      </div>
    </div>
  );
};

export default Project;
