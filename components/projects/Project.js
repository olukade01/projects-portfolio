import Image from "next/image";
import React from "react";
import Button from "../Button";

const Project = ({ alt, src, text1, text2 }) => {
  return (
    <div className="min-h-fit min-w-fit p-4 rounded-md mr-2">
      <div className="bg-grey rounded-md">
        {/* <Image width={50} height={50} alt={alt} src={src} /> */}
      </div>
      <p>{text1}</p>
      <p>{text2}</p>
      <div className="flex">
        <Button text="Mobile App" />
        <Button text="Website" />
        <Button text="SaaS" />
      </div>
    </div>
  );
};

export default Project;
