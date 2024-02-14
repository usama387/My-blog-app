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
      <div className="absolute top-0 w-full h-full text-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-7xl lg:text-[150px] font-bold">Usama Razaaq</h2>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold">
          Programmer, Photographer
        </p>
      </div>
    </div>
  );
};

export default Hero;
