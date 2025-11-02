"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import OrderConfirmationModal from "@/components/OrderConfirmationModal";
import { validateCheckoutForm } from "../../utils/validation";
import { sendOrderConfirmationEmail } from "../../utils/email";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const createOrder = useMutation(api.orders.createOrder);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const { isValid, errors: validationErrors } = validateCheckoutForm(
      formData,
      cart
    );

    if (!isValid) {
      if (validationErrors.cart) {
        toast.error(validationErrors.cart);
        return false;
      }
      setErrors(validationErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent duplicate submissions

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create order in Convex
      const orderId = await createOrder({
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        shipping: {
          address: formData.address,
          zip: formData.zip,
          city: formData.city,
          country: formData.country,
        },
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        totals: {
          subtotal: total,
          shipping: 50,
          taxes: vat,
          grandTotal: grandTotal,
        },
        status: "pending",
        timestamp: Date.now(),
      });

      // Send confirmation email
      try {
        await sendOrderConfirmationEmail({
          orderId,
          customer: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
          },
          shipping: {
            address: formData.address,
            zip: formData.zip,
            city: formData.city,
            country: formData.country,
          },
          items: cart.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
          totals: {
            subtotal: total,
            shipping: 50,
            taxes: vat,
            grandTotal: grandTotal,
          },
        });
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
        // Don't fail the order if email fails, just log it
      }

      toast.success("Order placed successfully!");
      setShowModal(true);
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = total * 0.2; // Assuming 20% VAT
  const grandTotal = total + vat + 50; // Adding shipping fee

  return (
    <div>
      <div className="bg-[#0E0E0E]">
        <Navbar />
      </div>
      <Link href="/">
        <p className=" hover:text-[#D87D4A] ml-35 mt-10 font-[400px]">
          Go Back
        </p>
      </Link>
      <div className="container mx-auto px-30 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* User Details */}
            <div className="bg-white p-6 ">
              <h2 className="text-lg font-bold mb-4 text-primary">
                Billing Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`input-default ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    placeholder="John Doe"
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`input-default ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="example@gmail.com"
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`input-default ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                    placeholder="+12334568655"
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-500 text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Shipping Details */}
            <div className="bg-white p-6 ">
              <h2 className="text-lg font-bold mb-4 text-primary">
                Shipping Info
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`input-default ${
                      errors.address ? "border-red-500" : ""
                    }`}
                    placeholder="1137 Williams Avenue"
                    aria-describedby={
                      errors.address ? "address-error" : undefined
                    }
                  />
                  {errors.address && (
                    <p id="address-error" className="text-red-500 text-sm mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className={`input-default ${
                      errors.zip ? "border-red-500" : ""
                    }`}
                    placeholder="10091"
                    aria-describedby={errors.zip ? "zip-error" : undefined}
                  />
                  {errors.zip && (
                    <p id="zip-error" className="text-red-500 text-sm mt-1">
                      {errors.zip}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`input-default ${
                      errors.city ? "border-red-500" : ""
                    }`}
                    placeholder="new york"
                    aria-describedby={errors.city ? "city-error" : undefined}
                  />
                  {errors.city && (
                    <p id="city-error" className="text-red-500 text-sm mt-1">
                      {errors.city}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`input-default ${
                      errors.country ? "border-red-500" : ""
                    }`}
                    placeholder="united states"
                    aria-describedby={
                      errors.country ? "country-error" : undefined
                    }
                  />
                  {errors.country && (
                    <p id="country-error" className="text-red-500 text-sm mt-1">
                      {errors.country}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-white p-6">
              <h2 className="text-lg font-bold mb-4 text-primary">
                Payment Details
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="block text-sm font-medium mb-2">
                    Payment Method
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-4 w-70 border border-primary rounded px-2 py-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="e-money"
                        checked={formData.paymentMethod === "e-money"}
                        onChange={handleInputChange}
                        className="radio-active"
                      />
                      <span>e-Money</span>
                    </label>
                    <label className="flex items-center gap-4   w-70 border border-primary  rounded p-2 py-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === "cash"}
                        onChange={handleInputChange}
                        className="radio-active"
                      />
                      <span>Cash on Delivery</span>
                    </label>
                  </div>
                </div>
                {formData.paymentMethod === "e-money" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        e-Money Number
                      </label>
                      <input
                        type="text"
                        name="eMoneyNumber"
                        value={formData.eMoneyNumber}
                        onChange={handleInputChange}
                        className="input-default"
                        placeholder="2357896675"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        e-Money PIN
                      </label>
                      <input
                        type="text"
                        name="eMoneyPin"
                        value={formData.eMoneyPin}
                        onChange={handleInputChange}
                        className="input-default"
                        placeholder="1234"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
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
                    <p className="font-semibold text-sm w-30">{item.name}</p>
                    <p className="text-gray-600 text-sm">${item.price}</p>
                  </div>
                  <div>x {item.quantity}</div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$50</span>
              </div>
              <div className="flex justify-between">
                <span>VAT (20%)</span>
                <span>${vat.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Grand Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full btn-primary text-white py-3 rounded font-semibold mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Processing..." : "Continue & Pay"}
            </button>
          </div>
        </div>
      </div>

      <OrderConfirmationModal
        showModal={showModal}
        cart={cart}
        grandTotal={grandTotal}
        onClose={() => {
          setShowModal(false);
          clearCart();
        }}
      />

      <Footer />
    </div>
  );
};

export default Checkout;
