import Image from "next/image";
import bannerImg from "@/images/bannerImg.jpg";

const Hero = () => {
  return (
    <div className="w-full max-h-screen relative rounded-md">
      <Image
        src={bannerImg}
        alt="banner image"
        className="w-full max-h-screen object-contain"
      />
    </div>
  );
};

export default Hero;
