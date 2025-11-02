"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus } from "lucide-react";

const CartPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 z-50 w-full h-full bg-black/20 bg-opacity-50 ">
      <div className="absolute top-20 right-30 bg-white rounded-lg shadow-lg p-6 w-95 max-h-96 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Cart ({cart.length})</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-gray-600 text-sm">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 hover:bg-gray-300 rounded p-1"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 hover:bg-gray-300 rounded p-1"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              <a
                href="/checkout"
                className="w-full btn-primary text-white py-2 rounded font-semibold text-center block"
              >
                Checkout
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
