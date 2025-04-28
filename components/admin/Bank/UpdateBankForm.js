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
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UpdateBankForm = ({ bank }) => {
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    setName(bank?.name);
    setAccountNumber(bank?.accountNumber);
  }, [bank]);

  //handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/bank/update-bank/${bank?._id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            name,
            accountNumber,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
        },
      );
      const data = await res.json();

      if (data?.data?._id) {
        setLoading(false);
        // Reset the form fields
        setName("");
        setAccountNumber("");
        router.push("/admin/bank-list");
        toast.success("Bank Updated Successful!");
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
      <div className="space-y-4">
        <div className="space-y-2">
          <FormInput
            label={"Bank name"}
            type="text"
            value={name}
            name="name"
            placeholder="enter bank name"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.name?.msg}
          </p>
        </div>

        <div className="space-y-2">
          <FormInput
            label={"Account Number"}
            type="number"
            value={accountNumber}
            name="accountNumber"
            placeholder="enter bank account number"
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.accountNumber?.msg}
          </p>
        </div>

        <Button className="w-full" disabled={loading} isPending={loading}>
          update
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

export default UpdateBankForm;
