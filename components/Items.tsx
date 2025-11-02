import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Items = () => {
  return (
    <div className="flex justify-center gap-10 pt-40 pb-20 mx-10">
      <div className="w-[350px] bg-[rgb(241,241,241)]  rounded-lg">
        <Image
          src="/images/sec1.png"
          alt="hero"
          width={110}
          height={110}
          className=" ml-14 relative left-15 -top-15"
        />
        <Image
          src="/shadow.svg"
          alt="hero"
          width={110}
          height={110}
          className=" ml-14 relative left-15 -top-15"
        />
        <div className="text-center -mt-15 pb-10">
          <p className="font-medium  text-xl">HEADPHONES</p>
          <Link href="/headphones">
            <button className="btn-text">
              <p className="text-sm font-medium">Shop </p>
              <ChevronRight className="w-4 h-4 text-[#D87D4A]" />
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[350px] bg-[#F1F1F1]  rounded-lg">
        <Image
          src="/images/speak.png"
          alt="hero"
          width={110}
          height={110}
          className=" ml-14 relative left-15 -top-15"
        />
        <Image
          src="/shadow.svg"
          alt="hero"
          width={110}
          height={110}
          className=" ml-14 relative left-15 -top-15"
        />
        <div className="text-center -mt-15 pb-10">
          <p className="font-medium  text-xl">SPEAKERS</p>
          <Link href="/speakers">
            <button className="btn-text">
              <p className="text-sm font-medium">Shop </p>
              <ChevronRight className="w-4 h-4 text-[#D87D4A]" />
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[350px] bg-[#F1F1F1]  rounded-lg">
        <Image
          src="/images/ear1.png"
          alt="hero"
          width={110}
          height={110}
          className=" ml-14 relative left-15 -top-15"
        />
        <Image
          src="/shadow.svg"
          alt="hero"
          width={110}
          height={110}
          className=" ml-14 relative left-15 -top-15"
        />
        <div className="text-center -mt-10 pb-10">
          <p className="font-medium  text-xl">EARPHONES</p>
          <Link href="/earphones">
            <button className="btn-text">
              <p className="text-sm font-medium">Shop </p>
              <ChevronRight className="w-4 h-4 text-[#D87D4A]" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Items;
