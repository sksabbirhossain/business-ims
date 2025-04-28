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

const AddCategoryForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
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
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/add-category`,
        {
          method: "POST",
          body: JSON.stringify({
            name,
            description,
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
        setDescription("");
        toast.success("Category Added Successful!");
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
            label={"category name"}
            type="text"
            value={name}
            name="name"
            placeholder="enter category name"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.name?.msg}
          </p>
        </div>

        <div className="space-y-2">
          <TextArea
            label={"category description"}
            type="text"
            value={description}
            name="description"
            placeholder="Enter Category description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.description?.msg}
          </p>
        </div>

        <FormInput
          label={"category image"}
          type="file"
          value={""}
          name="picture"
          placeholder="enter category image"
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

export default AddCategoryForm;
