/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";

import Button from "@/components/common/Button/Button";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const StripePaymentForm = ({ planType }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [country, setCountry] = useState("BD");
  const [zip, setZip] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  // create a payment handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      if (!stripe || !elements) return;

      const card = elements.getElement(CardNumberElement);

      if (!card) return;

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
        billing_details: {
          address: {
            postal_code: zip,
            country: country,
          },
        },
      });

      if (error) {
        setErrors({
          errors: {
            common: {
              msg: error.message || "Payment failed",
            },
          },
        });
        setLoading(false);
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/subscription/stripe-payment`,
        {
          method: "POST",
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            planType,
            paymentMethod: "stripe",
            postalCode: zip,
            country,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
        },
      );

      const data = await res.json();

      if (data?.data?._id) {
        toast.success("Payment successful");
      } else {
        setErrors(data);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrors({
        errors: {
          common: {
            msg: "Intranal server error!",
          },
        },
      });
    }
  };

  const inputStyle = {
    style: {
      base: {
        fontSize: "16px",
        color: "#32325d",
        "::placeholder": { color: "#aab7c4" },
      },
      invalid: { color: "#fa755a" },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="rounded-md border bg-gray-50 p-3">
        <div className="space-y-3">
          <div className="relative">
            <label className="mb-1 block text-sm font-semibold">
              Card Number
            </label>
            <CardNumberElement
              options={inputStyle}
              className="w-full rounded-md border p-2"
            />
            <span className="absolute right-2 top-[55%] text-gray-500">
              <Image alt="card icon" src="/card.png" height={100} width={100} />
            </span>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="mb-1 block text-sm font-semibold">Expiry</label>
              <CardExpiryElement
                options={inputStyle}
                className="w-full rounded-md border p-2"
              />
            </div>
            <div className="relative w-1/2">
              <label className="mb-1 block text-sm font-semibold">CVC</label>
              <CardCvcElement
                options={inputStyle}
                className="w-full rounded-md border p-2"
              />

              <span className="absolute right-2 top-[30px] size-6 text-gray-500">
                <Image alt="cvc icon" src="/cvc.png" height={100} width={100} />
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="mb-1 block text-sm font-semibold">
                Country
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-md border p-1.5"
              >
                <option value="BD">Bangladesh</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="IN">India</option>
                <option value="CA">Canada</option>
                {/* Add more as needed */}
              </select>
            </div>
            <div className="w-1/2">
              <label className="mb-1 block text-sm font-semibold">ZIP</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full rounded-md border p-1.5 focus:outline-none"
                placeholder="Postal Code"
              />
            </div>
          </div>
        </div>
      </div>
      <Button
        className="w-full"
        disabled={!stripe || loading}
        loading={loading}
      >
        Pay Now
      </Button>
      {errors?.errors?.common && (
        <p className="rounded bg-red-600 py-2 text-center text-sm font-medium text-white">
          {errors?.errors?.common?.msg}
        </p>
      )}
    </form>
  );
};

export default StripePaymentForm;
