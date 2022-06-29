import Button from "../Button";
import Image from "next/image";
import UpArrow from "../../public/assets/vectors/UpArrow";
import DownArrow from "../../public/assets/vectors/DownArrow";
import ProfilePic from "../../public/assets/images/profilePic.jpg";
import Navigation from "../navigation/Navigation";

const Introduction = () => {
  return (
    <div className="bg-intro bg-no-repeat bg-cover bg-center h-[754px]">
      <Navigation />
      <div
        className=" mx-[207px]
      flex justify-between items-center bg-hero-pattern mt-[135px]
      "
      >
        <div className="">
          <h1 className="text-Tblack leading-snug font-bold text-5xl">
            Hi 👋
            <br /> I&apos;m Olukade Muzzammil
          </h1>
          <p className=" max-w-lg text-xl mt-8 mb-12">
            Passionate di bidang Frontend Dev dan UI/UX Design. Suka membangun
            antarmuka website yang fast-performace dan well-design menggunakan
            teknologi-teknologi terbaru.
          </p>
          <div className="flex">
            <Button icon iconn={<UpArrow />} black text="Let's work together" />
            <Button icon iconn={<DownArrow />} text="See some of my works" />
          </div>
        </div>
        <div>
          <Image className="rounded-full" src={ProfilePic} alt="profile pic" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
