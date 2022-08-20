import Button from "../Button";
import Image from "next/image";
import UpArrow from "../../public/assets/vectors/UpArrow";
import DownArrow from "../../public/assets/vectors/DownArrow";
import ProfilePic from "../../public/assets/images/profilePic.jpg";

const Introduction = ({ theme }) => {
  return (
    <div className="bg-intro dark:bg-dark-intro bg-no-repeat bg-cover bg-center ">
      <div className="container mx-auto flex flex-col-reverse md:flex-row md:justify-between items-center pt-28 md:pt-40 pb-20 px-6 gap-16">
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
          <div className="flex justify-between max-w-lg md:flex-row">
            <a href="#contact" className="max-w-[50rem]">
              <Button
                // width
                icon
                iconn={
                  theme === "light" ? (
                    <UpArrow className="" />
                  ) : (
                    <UpArrow color="#1F2937" />
                  )
                }
                black
                text="Let's work together"
              />
            </a>
            <a href="#projects" className="">
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
        <div className="">
          <Image
            className="rounded-full"
            src={ProfilePic}
            alt="profile pic"
            // width={''}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
