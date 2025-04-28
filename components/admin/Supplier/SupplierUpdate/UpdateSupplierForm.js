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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UpdateSupplierForm = ({ supplier }) => {
  const [name, setName] = useState("");
  const [shopName, setShopName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [picture, SetPicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { data: session } = useSession();

  //set default value
  useEffect(() => {
    setName(supplier.name);
    setShopName(supplier.shopName);
    setDescription(supplier.description);
    setEmail(supplier.email);
    setPhone(supplier.phone);
    setWebsite(supplier.website);
    setAddress(supplier.address);
  }, [supplier]);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/update-supplier/${supplier?._id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          method: "POST",
          body: JSON.stringify({
            name,
            shopName,
            description,
            email,
            phone,
            website,
            address,
            picture,
          }),
        },
      );
      const data = await res.json();

      if (data?.data?._id) {
        router.push("/admin/supplier-list");
        toast.success("Supplier updated successfull");
      }

      if (data?.errors) {
        setErrors(data);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      return err.message;
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <FormInput
              label={"Supplier name"}
              type="text"
              value={name}
              name="name"
              placeholder="enter supplier name"
              onChange={(e) => setName(e.target.value)}
            />
            <p className="text-sm font-semibold text-red-500">
              {errors?.errors?.name?.msg}
            </p>
          </div>

          <div className="space-y-2">
            <FormInput
              label={"Supplier shop name"}
              type="text"
              value={shopName}
              name="shopName"
              placeholder="enter supplier shop name"
              onChange={(e) => setShopName(e.target.value)}
            />
            <p className="text-sm font-semibold text-red-500">
              {errors?.errors?.shopName?.msg}
            </p>
          </div>

          <div className="space-y-2">
            <TextArea
              label={"supplier description"}
              type="text"
              rows="3"
              value={description}
              name="description"
              placeholder="Enter supplier description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <p className="text-sm font-semibold text-red-500">
              {errors?.errors?.description?.msg}
            </p>
          </div>

          <div className="space-y-2">
            <FormInput
              label={"Email"}
              type="email"
              value={email}
              name="email"
              placeholder="enter supplier email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-sm font-semibold text-red-500">
              {errors?.errors?.email?.msg}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <FormInput
              label={"contact number"}
              type="text"
              value={phone}
              name="phone"
              placeholder="enter supplier contact number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <p className="text-sm font-semibold text-red-500">
              {errors?.errors?.phone?.msg}
            </p>
          </div>

          <div className="space-y-2">
            <FormInput
              label={"Website URL"}
              type="text"
              value={website}
              name="website"
              placeholder="enter supplier website URL"
              onChange={(e) => setWebsite(e.target.value)}
            />
            <p className="text-sm font-semibold text-red-500">
              {errors?.errors?.website?.msg}
            </p>
          </div>

          <div className="space-y-2">
            <FormInput
              label={"Address"}
              type="text"
              value={address}
              name="address"
              placeholder="enter supplier Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <p className="text-sm font-semibold text-red-500">
              {errors?.errors?.address?.msg}
            </p>
          </div>

          <div className="space-y-2">
            <FormInput
              label={"category image"}
              type="file"
              value={""}
              name="picture"
              placeholder="enter category image"
              onChange={(e) => SetPicture(e.target.file[0])}
            />
          </div>

          <Button className="w-full" disabled={loading} type={"submit"}>
            {loading ? (
              <p className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5, 5"
                    strokeLinecap="round"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 12 12"
                      to="360 12 12"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </p>
            ) : (
              "Update Supplier"
            )}
          </Button>
          {errors?.errors?.common && (
            <p className="rounded bg-red-600 py-2 text-center text-sm font-medium text-white">
              {errors?.errors?.common?.msg}
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default UpdateSupplierForm;
