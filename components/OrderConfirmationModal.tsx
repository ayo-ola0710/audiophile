import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import Link from "next/link";

interface OrderConfirmationModalProps {
  showModal: boolean;
  cart: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  grandTotal: number;
  onClose: () => void;
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  showModal,
  cart,
  grandTotal,
  onClose,
}) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center z-50 mt-15">
      <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
        <div className="mb-6">
          <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center">
            <Check className="text-white" size={32} strokeWidth={3} />
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-left mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">THANK YOU</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            FOR YOUR ORDER
          </h2>
          <p className="text-gray-500 text-sm">
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div className="flex">
          {/* Order Summary */}
          <div className="bg-gray-50 rounded-tl-lg rounded-bl-lg p-6 mb-6 w-80">
            <div className="flex items-start gap-4 mb-4">
              <Image
                src={cart[0]?.image || "/images/head1.png"}
                alt={cart[0]?.name || "Product"}
                width={32}
                height={32}
                className="rounded"
              />

              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-semibold text-gray-900 text-lg w-40">
                    {cart[0]?.name || "Product"}
                  </h3>
                  <span className="text-gray-600">
                    x{cart[0]?.quantity || 1}
                  </span>
                </div>
                <p className="text-gray-600">
                  ${cart[0]?.price?.toLocaleString() || "0"}
                </p>
              </div>
            </div>

            {cart.length > 1 && (
              <p className="text-gray-500 text-sm border-t">
                and {cart.length - 1} other item
                {cart.length - 1 > 1 ? "s" : ""}
              </p>
            )}
          </div>

          {/* Grand Total */}
          <div className="bg-black rounded-tr-lg rounded-br-lg p-6 mb-6 w-40">
            <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">
              Grand Total
            </p>
            <p className="text-white text-lg font-bold">
              ${grandTotal.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <Link href="/">
          <button
            onClick={onClose}
            className="w-full btn-primary text-white py-4 rounded-lg transition-colors uppercase tracking-wide"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
