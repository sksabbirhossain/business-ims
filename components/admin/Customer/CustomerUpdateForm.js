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

const CustomerUpdateForm = ({ customer }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [picture, SetPicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { data: session } = useSession();

  const router = useRouter();
  // set customer default value
  useEffect(() => {
    setName(customer?.data?.name);
    setEmail(customer?.data?.email);
    setPhone(customer?.data?.phone);
    setAddress(customer?.data?.address);
  }, [customer]);

  //handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/customer/${customer?.data?._id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            picture,
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
        toast.success("customer Updated Successful!");
        router.refresh("/admin/customer-list");
        router.replace("/admin/customer-list");
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
            label={"customer name"}
            type="text"
            value={name}
            name="name"
            placeholder="enter customer name"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.name?.msg}
          </p>
        </div>

        <div className="space-y-2">
          <FormInput
            label={"customer email"}
            type="text"
            value={email}
            name="email"
            placeholder="enter customer email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.email?.msg}
          </p>
        </div>
        <div className="space-y-2">
          <FormInput
            label={"customer phone"}
            type="text"
            value={phone}
            name="phone"
            placeholder="enter customer phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.phone?.msg}
          </p>
        </div>
        <div className="space-y-2">
          <FormInput
            label={"customer address"}
            type="text"
            value={address}
            name="address"
            placeholder="enter customer address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.address?.msg}
          </p>
        </div>

        <FormInput
          label={"customer image"}
          type="file"
          value={""}
          name="picture"
          placeholder="enter customer image"
          onChange={(e) => SetPicture(e.target.file[0])}
        />
        <Button className="w-full" disabled={loading} isPending={loading}>
          Update
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

export default CustomerUpdateForm;
