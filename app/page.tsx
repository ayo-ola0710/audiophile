import Navbar from "@/components/Navbar";
import Image from "next/image";
import Items from "@/components/Items";
import BottomSection from "@/components/BottomSection";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <div className="bg-[#0E0E0E] overflow-hidden min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center overflow-hidden">
          <div className="space-y-5">
            <p className=" text-white tracking-[10px]">NEW PRODUCT</p>
            <p className="text-white text-7xl">
              XX99 Mark II <br /> Headphones
            </p>
            <p className="body-text text-white font-medium">
              Experience natural, lifelike audio and exceptional <br /> build
              quality made for the passionate music <br /> enthusiast.
            </p>
            <button className="subtitle btn-primary">SEE PRODUCT</button>
          </div>
          <Image
            src="/images/hero2.png"
            alt="hero"
            width={470}
            height={400}
            className="w-150 ml-14 relative z-5"
          />
        </div>
      </div>
      <div className="bg-white ">
        <Items />
      </div>
      <div className="bg-[#D87D4A] mx-20 rounded-lg h-120  overflow-hidden">
        <Image
          src="/circle.svg"
          alt="Image"
          width={700}
          height={700}
          className="absolute z-0"
        />
        <div className="relative z-10 flex items-center justify-evenly pt-20">
          <Image
            src="/images/speak.png"
            alt="Image"
            width={500}
            height={500}
            className=" w-80 pt-10 -pb-40"
          />
          <div className="text-white mx-20 space-y-8 -pt-10">
            <p className="font-bold text-6xl tracking-[2px]">
              ZX9 <br /> SPEAKER
            </p>
            <p className="font-medium">
              Upgrade to premium speakers that are <br /> phenomenally built to
              deliver truly remarkable <br /> sound.
            </p>
            <button className="subtitle btn-secondary">SEE PRODUCT</button>
          </div>
        </div>
      </div>
      <div className="ml-20 mt-20 mb-10 relative">
        <Image
          src="/images/table.png"
          alt="Image"
          width={1140}
          height={700}
          className="rounded-lg"
        />
        <div className="absolute top-20 left-25 space-y-8">
          <p className="font-bold text-3xl tracking-[2px]">ZX7 SPEAKER</p>
          <button className="subtitle btn-outline">SEE PRODUCT</button>
        </div>
      </div>
      <div className="mb-20 flex justify-center gap-5 ">
        <Image
          src="/images/ear2.png"
          alt="Image"
          width={600}
          height={600}
          className="rounded-lg"
        />
        <div className="bg-[#F1F1F1] w-135 h-90 rounded-lg  pl-20 pt-30 space-y-7">
          <p className="font-bold text-3xl tracking-[2px]">YX1 EARPHONES</p>
          <button className="subtitle btn-outline">SEE PRODUCT</button>
        </div>
      </div>
      <BottomSection />
      <Footer />
    </div>
  );
};

export default page;
