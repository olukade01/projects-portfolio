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
    <div className=" mt-12 border-2 border-[#E5E7EB] min-h-[400px] min-w-[530px] p-6 rounded-[32px] mr-12">
      <div className="mb-8 bg-[#F5F5F5] opacity-70 min-h-[300px] rounded-[32px]">
        {/* <Image width={50} height={50} alt={alt} src={src} /> */}
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
