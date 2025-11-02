import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <div className="bg-[#101010] py-20">
      <div className="flex justify-between items-center mx-30 text-white font-semibold  py-8">
        <Image src="/images/logo.png" alt="logo" width={140} height={120} />
        <ul className="flex gap-10 items-center text-[13px]">
          <Link href="/">
            <li className="cursor-pointer hover:scale-105 hover:text-gray-300">
              HOME
            </li>
          </Link>
          <Link href="/headphones">
            <li className="cursor-pointer hover:scale-105 hover:text-gray-300">
              HEADPHONES
            </li>
          </Link>
          <Link href="/speakers">
            <li className="cursor-pointer hover:scale-105 hover:text-gray-300">
              SPEAKERS
            </li>
          </Link>
          <Link href="/earphones">
            <li className="cursor-pointer hover:scale-105 hover:text-gray-300">
              EARPHONES
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex justify-between items-center mx-30 text-white">
        <div className="space-y-8">
          <p className="font-[500px] text-[15px]">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team <br /> of music lovers and sound specialists
            who are devoted to helping you get the <br /> most out of personal
            audio. Come and visit our demo facility - we’re open 7 <br /> days a
            week.
          </p>
          <p className="font-bold text-[15px]">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
        <div className="flex gap-10">
          <Facebook className="w-6 h-6 cursor-pointer hover:scale-105 hover:text-gray-300" />
          <Twitter className="w-6 h-6 cursor-pointer hover:scale-105 hover:text-gray-300" />
          <Instagram className="w-6 h-6 cursor-pointer hover:scale-105 hover:text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
