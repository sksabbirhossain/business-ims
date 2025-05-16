/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";

import Image from "next/image";
import { useState } from "react";
import StripePaymentForm from "./StripePaymentForm";

const SubscriptionForm = () => {
  const [planType, setPlanType] = useState("monthly");
  const [paymentMethod, setPaymentMethod] = useState("stripe");

  const isSelected = (type, value) =>
    type === value ? "ring-2 ring-secondary" : "border-gray-300";

  return (
    <div className="w-full max-w-[500px] space-y-5 py-3">
      {/* Plan Selection */}
      <div className="space-y-2">
        <h2 className="text-base font-semibold capitalize">
          select Subscription Plan
        </h2>
        <div className="mb-8 grid select-none grid-cols-1 gap-6 sm:grid-cols-2">
          <div
            onClick={() => setPlanType("monthly")}
            className={`cursor-pointer rounded-md border p-3 text-center shadow-sm transition hover:shadow-md ${isSelected(planType, "monthly")}`}
          >
            <h3 className="mb-1 text-xl font-semibold">Monthly Plan</h3>
            <p className="font-medium uppercase text-gray-600">
              500 BDT / month
            </p>
          </div>

          <div
            onClick={() => setPlanType("yearly")}
            className={`cursor-pointer rounded-md border p-3 text-center shadow-sm transition hover:shadow-md ${isSelected(planType, "yearly")}`}
          >
            <h3 className="mb-1 text-xl font-semibold">Yearly Plan</h3>
            <p className="font-medium uppercase text-gray-600">
              5000 BDT / year
            </p>
          </div>
        </div>
      </div>

      {/* Payment Gateway Selection */}
      <div className="space-y-2">
        <h3 className="text-base font-semibold capitalize">
          Select Payment Method
        </h3>
        <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div
            onClick={() => setPaymentMethod("stripe")}
            className={`flex cursor-pointer select-none flex-col items-center justify-center rounded-md border p-3 transition hover:shadow-md ${isSelected(paymentMethod, "stripe")}`}
          >
            <Image
              src="/stripe-logo1.png"
              alt="Stripe"
              className="h-10 object-cover"
              width={100}
              height={100}
            />
            <p className="text-sm text-gray-500">Pay securely with card</p>
          </div>

          <div
            onClick={() => setPaymentMethod("sslcommerz")}
            className={`flex cursor-pointer select-none flex-col items-center justify-center rounded-md border p-3 transition hover:shadow-md ${isSelected(paymentMethod, "sslcommerz")}`}
          >
            <Image
              src="/sslcommerz-logo.png"
              alt="SSLCommerz"
              className="h-10 object-cover"
              width={100}
              height={100}
            />
            <p className="text-sm text-gray-500">Pay via Bkash/Nagad</p>
          </div>
        </div>
      </div>

      {/* Dynamic Payment Form */}
      {paymentMethod === "stripe" && (
        <div>
          <StripePaymentForm planType={planType} />
        </div>
      )}

      {paymentMethod === "sslcommerz" && (
        <div className="mb-6 rounded-md border bg-gray-50 p-4">
          <h4 className="mb-2 font-semibold">Bkash/Nagad Payment</h4>
          <p className="text-sm text-gray-600">
            This payment gateway not available right now!
          </p>
        </div>
      )}
    </div>
  );
};

export default SubscriptionForm;
