import Button from "../Button";
import Image from "next/image";
import UpArrow from "../../public/assets/vectors/UpArrow";
import DownArrow from "../../public/assets/vectors/DownArrow";
import ProfilePic from "../../public/assets/images/profilePic.jpg";

const Introduction = ({ theme }) => {
  return (
    <div className="bg-intro bg-white dark:bg-dark-intro bg-no-repeat bg-cover bg-center h-[754px]">
      <div className="md:mx-[12.9rem]">
        <div
          className="
      flex justify-between  flex-col sm:flex-row items-center bg-hero-pattern mt-[135px] px-4 sm:px-0
      "
        >
          <div className="w-[60%] order-3">
            <h1 className=" leading-snug font-bold text-5xl">
              Hi 👋
              <br /> I&apos;m Olukade Muzzammil
            </h1>
            <p className="max-w-lg text-xl mt-8 mb-12">
              Passionate di bidang Frontend Dev dan UI/UX Design. Suka membangun
              antarmuka website yang fast-performace dan well-design menggunakan
              teknologi-teknologi terbaru.
            </p>
            <div className="flex">
              <a href="#contact" className="w-[235px]">
                <Button
                  icon
                  iconn={
                    theme === "light" ? (
                      <UpArrow />
                    ) : (
                      <UpArrow color="#1F2937" />
                    )
                  }
                  black
                  text="Let's work together"
                />
              </a>
              <a href="#projects" className="w-[260px]">
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
          <div className="w-[40%] order-1">
            <Image
              className="rounded-full"
              src={ProfilePic}
              alt="profile pic"
              width={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
