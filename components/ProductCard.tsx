"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  desc: string;
  img: string;
  head?: string;
  imagePosition?: "left" | "right";
  category: string;
  id: string;
}

const ProductCard = ({
  title,
  desc,
  img,
  head,
  imagePosition = "right",
  category,
  id,
}: ProductCardProps) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div
      className={`flex items-center justify-center gap-15 pt-20 pb-20 mx-10 ${
        isImageLeft ? "flex-row-reverse" : ""
      }`}
    >
      <div className="space-y-9 max-w-md">
        <p className="font-[400px] text-[15px] uppercase tracking-[10px] text-[#D87D4A] ">
          {head}
        </p>
        <p className="font-bold text-[40px] uppercase  leading-11 ">{title}</p>
        <p className="font-[400px] text-[15px]">
          {desc.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < desc.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>
        <div className="flex gap-4">
          <Link href={`/${category}/${id}`}>
            <button className="btn-primary">SEE PRODUCT</button>
          </Link>
        </div>
      </div>
      <div className="bg-[#F1F1F1] w-125">
        <Image
          src={img}
          alt="Image"
          width={300}
          height={300}
          className="rounded-lg ml-25 pt-5 "
        />
        <Image
          src="shadow.svg"
          alt="Image"
          width={300}
          height={300}
          className="rounded-lg ml-25 -mt-10 "
        />
      </div>
    </div>
  );
};

export default ProductCard;
