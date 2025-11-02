"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import BottomSection from "@/components/BottomSection";
import Items from "@/components/Items";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const YX1Wireless = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: "yx1-wireless",
      name: "YX1 WIRELESS EARPHONES",
      image: "/images/ear1.png",
      price: 599,
      quantity,
    });
  };
  return (
    <div>
      <div className="bg-[#0E0E0E]">
        <Navbar />
      </div>
      <Link href="/earphones">
        <p className=" hover:text-[#D87D4A] ml-35 mt-10 font-[400px]">
          Go Back
        </p>
      </Link>

      {/* Product Section */}
      <div className="flex items-center justify-center gap-15 pt-20 pb-20 mx-10">
        <div className="bg-[#F1F1F1] w-125">
          <Image
            src="/images/ear1.png"
            alt="XX99 Mark II Headphones"
            width={300}
            height={300}
            className="rounded-lg ml-25 pt-5"
          />
          <Image
            src="/shadow.svg"
            alt="Shadow"
            width={300}
            height={300}
            className="rounded-lg ml-25 -mt-10"
          />
        </div>
        <div className="space-y-5 max-w-md">
          <p className="font-[400px] text-[15px] uppercase tracking-[10px] text-[#D87D4A]">
            NEW PRODUCT
          </p>
          <p className="font-bold text-[40px] uppercase leading-11 w-40">
            YX1 WIRELESS EARPHONES
          </p>
          <p className="font-[400px] text-[15px]">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <p className="font-bold text-[18px]">$ 599</p>
          <div className="flex gap-4">
            <div className="flex items-center bg-[#F1F1F1] px-4 py-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-2"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2"
              >
                +
              </button>
            </div>
            <button onClick={handleAddToCart} className="btn-primary">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className=" ml-35 py-20">
        <div className="grid grid-cols-2 gap-40">
          <div>
            <h3 className="font-bold text-[32px] mb-8">FEATURES</h3>
            <p className="text-[15px] leading-6 mb-6 font-[400px]">
              Experience unrivalled stereo sound thanks to innovative acoustic
              technology. With improved ergonomics designed for full day
              wearing, these revolutionary earphones have been finely crafted to
              provide you with the perfect fit, delivering complete comfort all
              day long while enjoying exceptional noise isolation and truly
              immersive sound.
            </p>
            <p className="text-[15px] leading-6">
              The YX1 Wireless Earphones features customizable controls for
              volume, music, calls, and voice assistants built into both
              earbuds. The new 7-hour battery life can be extended up to 28
              hours with the charging case, giving you uninterrupted play time.
              Exquisite craftsmanship with a splash resistant design now
              available in an all new white and grey color scheme as well as the
              popular classic black.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[32px] mb-8">IN THE BOX</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-6">
                <span className="text-[#D87D4A] font-bold">2x</span>
                <span>Earphone Unit</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-[#D87D4A] font-bold">6x</span>
                <span>Multi-size Earplugs</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-[#D87D4A] font-bold">1x</span>
                <span>User Manual</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-[#D87D4A] font-bold">1x</span>
                <span>USB-C Charging Cable</span>
              </li>
              <li className="flex items-center gap-6">
                <span className="text-[#D87D4A] font-bold">1x</span>
                <span>Travel Pouch</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mx-10 py-20 ">
        <div className="flex flex-row justify-center gap-10">
          <div className="space-y-6 ">
            <Image
              src="/images/earcad2.png"
              alt="Gallery 1"
              width={400}
              height={350}
              className="rounded-lg"
            />
            <Image
              src="/images/earcad3.png"
              alt="Gallery 2"
              width={400}
              height={350}
              className="rounded-lg"
            />
          </div>
          <Image
            src="/images/earcad1.png"
            alt="Gallery 3"
            width={550}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Related Products */}
      <div className="mx-10 py-20">
        <h3 className="font-bold text-[32px] text-center mb-16">
          YOU MAY ALSO LIKE
        </h3>
        <div className="grid grid-cols-3 gap-10 mx-25">
          <div>
            <div className="bg-[#F1F1F1] w-85 h-80 rounded-lg">
              <Image
                src="/images/sec1.png"
                alt="XX99 Mark II Headphones"
                width={200}
                height={200}
                className="rounded-lg ml-13 pt-5"
              />
            </div>
            <div className="flex flex-col justify-center items-center pt-10 space-y-5">
              <p className="font-bold text-2xl">XX99 MARK I</p>
              <button className="btn-primary">SEE PRODUCT</button>
            </div>
          </div>
          <div>
            <div className="bg-[#F1F1F1] w-85 h-80 rounded-lg">
              <Image
                src="/images/head2.png"
                alt="XX99 Mark II Headphones"
                width={200}
                height={200}
                className="rounded-lg ml-15 pt-9"
              />
            </div>
            <div className="flex flex-col justify-center items-center pt-10 space-y-5">
              <p className="font-bold text-2xl">XX59</p>
              <button className="btn-primary">SEE PRODUCT</button>
            </div>
          </div>
          <div>
            <div className="bg-[#F1F1F1] w-85 h-80 rounded-lg">
              <Image
                src="/images/speak.png"
                alt="XX99 Mark II Headphones"
                width={200}
                height={200}
                className="rounded-lg ml-13 pt-5"
              />
            </div>
            <div className="flex flex-col justify-center items-center pt-10 space-y-5">
              <p className="font-bold text-2xl">ZX9 SPEAKER</p>
              <button className="btn-primary">SEE PRODUCT</button>
            </div>
          </div>
        </div>
      </div>
      <Items />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default YX1Wireless;
