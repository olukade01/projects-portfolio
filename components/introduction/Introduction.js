import Button from "../Button";
import Image from "next/image";
import UpArrow from "../../public/assets/vectors/UpArrow";
import DownArrow from "../../public/assets/vectors/DownArrow";
import ProfilePic from "../../public/assets/images/profilePic.jpg";

const Introduction = ({ theme }) => {
  return (
    <div className="bg-intro dark:bg-dark-intro bg-no-repeat bg-cover bg-center ">
      <div className="container mx-auto flex flex-col-reverse md:flex-row md:justify-between items-center pt-28 md:pt-40 pb-20 px-10 gap-16">
        <div className="flex flex-col md:w-1/2 space-y-10">
          <h1 className="md:leading-snug font-bold text-left text-4xl md:text-5xl">
            Hi 👋
            <br /> I&apos;m Olukade Muzzammil
          </h1>
          <p className="max-w-xl">
            Passionate di bidang Frontend Dev dan UI/UX Design. Suka membangun
            antarmuka website yang fast-performace dan well-design menggunakan
            teknologi-teknologi terbaru.
          </p>
          <div className="flex sm:flex-row justify-between max-w-lg md:flex-col lg:flex-row">
            <a href="#contact" className="mb-4 mr-2 text-sm md:text-[15px]">
              <Button
                className="w-[20rem]"
                icon
                iconn={
                  theme === "light" ? <UpArrow /> : <UpArrow color="#1F2937" />
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
                    <DownArrow />
                  ) : (
                    <DownArrow color="#F9FAFB" />
                  )
                }
                text="See some of my works"
              />
            </a>
          </div>
        </div>
        <div className="w-[18rem] sm:w-[25rem]">
          <Image className="rounded-full" src={ProfilePic} alt="profile pic" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
