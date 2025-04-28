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
import TextArea from "@/components/common/FormInput/TextArea";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";

const AddCustomerForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [picture, SetPicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { data: session } = useSession();

  //handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/customer/create`,
        {
          method: "POST",
          body: JSON.stringify({
            name,
            email: email === "" ? undefined : email,
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
        // Reset the form fields
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        SetPicture(null);
        toast.success("Customer Added Successful!");
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
            label={"Customer name"}
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
            label={"Customer email"}
            type="email"
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
            label={"Customer number"}
            type="text"
            value={phone}
            name="phone"
            placeholder="enter customer number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.phone?.msg}
          </p>
        </div>

        <div className="space-y-2">
          <FormInput
            label={"Customer address"}
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
          label={"category image"}
          type="file"
          value={""}
          name="picture"
          placeholder="enter customer image"
          onChange={(e) => SetPicture(e.target.file[0])}
        />
        <Button className="w-full" disabled={loading} isPending={loading}>
          add
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

export default AddCustomerForm;
