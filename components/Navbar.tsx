"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CartPopup from "./CartPopup";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      <div className="flex justify-between items-center mx-30 text-white font-semibold border-b border-[#FFFFFF] py-8">
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
        <button
          className="cursor-pointer hover:scale-105 hover:text-gray-300 relative"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </div>
      <CartPopup isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
