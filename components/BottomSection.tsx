import Image from "next/image";

const BottomSection = () => {
  return (
    <div className="flex items-center justify-center gap-15 pt-20 pb-20 mx-10">
      <div className="space-y-9">
        <div className="space-y-5">
          <p className="font-bold text-[40px] uppercase ">
            Bringing you the <br />
          </p>
          <p className="font-bold text-[40px] uppercase">
            <span className="text-primary-light">best </span>
            audio gear
          </p>
        </div>
        <p className="font-[400px] text-[15px]">
          Located at the heart of New York City, Audiophile is the premier{" "}
          <br /> store for high end headphones, earphones, speakers, and audio{" "}
          <br /> accessories. We have a large showroom and luxury <br />{" "}
          demonstration rooms available for you to browse and <br /> experience
          a wide range of our products. Stop by our store to <br /> meet some of
          the fantastic people who make Audiophile the <br /> best place to buy
          your portable audio equipment.
        </p>
      </div>
      <Image
        src="/images/person.png"
        alt="Image"
        width={450}
        height={400}
        className="rounded-lg"
      />
    </div>
  );
};

export default BottomSection;
