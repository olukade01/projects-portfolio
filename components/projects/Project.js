import Image from 'next/image';
import React from 'react';
import Button from '../Button';

const Project = ({
  alt,
  src,
  text1,
  text2,
  href,
  technologyArray,
  mobile,
  appStore,
  link,
  link1,
}) => {
  return (
    <div className=" mr-6 border-2 border-[#E5E7EB] dark:border-[#313131]  bg-project dark:bg-[#1F2937] p-6 rounded-[2rem] ">
      <div className="mb-8 ">
        {/* h-[20.5rem] */}
        <a href={href} target="_blank" rel="noreferrer">
          <Image
            className="hover:scale-110 rounded-[2rem] transition ease-linear duration-300 h-60"
            alt={alt}
            src={src}
          />
        </a>
      </div>
      <div className="sm:flex mb-4 items-center justify-between">
        <p className="font-medium text-2xl">{text1}</p>
        {mobile && (
          <div className="flex gap-2 mt-3 sm:mt-0">
            {appStore && (
              <a href={link} target="_blank" rel="noreferrer">
                {' '}
                <Button mobile text="App Store" />
              </a>
            )}
            <a href={link1} target="_blank" rel="noreferrer">
              <Button mobile text="Google Play" />
            </a>
          </div>
        )}
      </div>
      <p className="opacity-60 mb-4 ">{text2}</p>
      {/* h-[4rem] */}
      <div className="flex overflow-scroll">
        {technologyArray.map((text, index) => (
          <div
            className="bg-[#e5e4e4] dark:bg-transparent dark:border dark:border-[#4F4F4F] p-2 rounded-lg mr-2 flex items-center text-sm"
            key={index}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
