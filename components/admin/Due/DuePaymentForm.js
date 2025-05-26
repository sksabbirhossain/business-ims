/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";

import Button from "@/components/common/Button/Button";
import FormInput from "@/components/common/FormInput/FormInput";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const DuePaymentForm = ({ dueSale }) => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { data: session } = useSession();
  const router = useRouter();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/sale/due-sales-payment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount, saleId: dueSale?.data?._id }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
        },
      );
      const data = await res.json();

      if (data?.data?._id) {
        setLoading(false);
        toast.success("Due Added Successful!");
        router.push("/admin/due-list");
      } else {
        setLoading(false);
        setErrors(data);
      }
    } catch (err) {
      setLoading(false);
      setErrors({
        errors: {
          common: {
            // msg: err.message,
            msg: "Intranal server error!",
          },
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-3">
        <div className="flex h-full w-full justify-between gap-4 border-b pb-2">
          <p className="text-sm font-medium capitalize">Customer Name</p>
          <p className="text-sm font-semibold">
            {dueSale?.data?.customer?.name || "N/A"}
          </p>
        </div>
        <div className="flex h-full w-full justify-between gap-4 border-b pb-2">
          <p className="text-sm font-medium capitalize">Transaction id</p>
          <p className="text-sm font-semibold">{dueSale?.data?.trxid}</p>
        </div>
        <div className="flex h-full w-full justify-between gap-4 border-b pb-2">
          <p className="text-sm font-medium capitalize">total price</p>
          <p className="text-sm font-semibold">
            {dueSale?.data?.totalPrice} Tk.
          </p>
        </div>
        <div className="flex h-full w-full justify-between gap-4 border-b pb-2">
          <p className="text-sm font-medium capitalize">total due</p>
          <p className="text-sm font-semibold">{dueSale?.data?.due} Tk.</p>
        </div>
        <FormInput
          type="number"
          placeholder="Enter Your Payment amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button className="w-full" isPending={loading}>
          Add
        </Button>
        {errors?.errors?.common && (
          <p className="rounded bg-red-600 py-2 text-center text-sm font-medium text-white">
            {errors?.errors?.common?.msg}
          </p>
        )}
      </div>
    </form>
  );
};

export default DuePaymentForm;
