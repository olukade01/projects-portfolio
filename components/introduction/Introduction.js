import Button from "../Button";
import Image from "next/image";
import UpArrow from "../assets/UpArrow";
import DownArrow from "../assets/DownArrow";

const Introduction = () => {
  return (
    <div className="flex justify-between mb-56">
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
        <Image
          width={100}
          height={100}
          src="/public/profilePic.jpg"
          alt="profile pic"
        />
      </div>
    </div>
  );
};

export default Introduction;
