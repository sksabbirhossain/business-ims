/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";
import Button from "@/components/common/Button/Button";
import Container from "@/components/common/Container/Container";
import FormInput from "@/components/common/FormInput/FormInput";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import { useState } from "react";
import { toast } from "react-toastify";

const CreateStore = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [storeName, setStoreName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    if (password !== confirmPassword) {
      setLoading(false);
      return setErrors({
        errors: {
          confirmPassword: {
            msg: "Password and confirm password not match",
          },
        },
      });
    }
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/superadmin/create-store`,
        {
          method: "POST",
          body: JSON.stringify({
            ownerName,
            storeName,
            email,
            phone,
            address,
            website,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await res.json();

      if (data?.data?._id) {
        setLoading(false);
        // Reset the form fields
        setOwnerName("");
        setStoreName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setWebsite("");
        setPassword("");
        setConfirmPassword("");
        toast.success("Store created Successful!");
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
    <Container>
      <PageHeader headText="Create store" />
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-auto w-[90%]">
          <div className="w-full space-y-6 rounded-md bg-white px-4 py-10 shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <FormInput
                      label="store name"
                      type="text"
                      name="storeName"
                      placeholder="Enter store name"
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                    />
                    <p className="text-sm font-semibold text-red-500">
                      {errors?.errors?.storeName?.msg}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <FormInput
                      label="store owner name"
                      type="text"
                      name="ownerName"
                      placeholder="Enter store owner name"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                    />
                    <p className="text-sm font-semibold text-red-500">
                      {errors?.errors?.ownerName?.msg}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <FormInput
                      label="Email"
                      type="email"
                      name="email"
                      placeholder="Enter store email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="text-sm font-semibold text-red-500">
                      {errors?.errors?.email?.msg}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <FormInput
                      label="phone number"
                      type="text"
                      name="phone"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <p className="text-sm font-semibold text-red-500">
                      {errors?.errors?.phone?.msg}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <FormInput
                    label="Website URL (optional)"
                    type="text"
                    name="website"
                    placeholder="Enter website url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />

                  <div className="space-y-2">
                    <FormInput
                      label="Address"
                      type="text"
                      name="address"
                      placeholder="Enter store address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <p className="text-sm font-semibold text-red-500">
                      {errors?.errors?.address?.msg}
                    </p>
                  </div>

                  <div className="relative space-y-2">
                    <FormInput
                      label="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter store password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      className="absolute bottom-2 right-1 cursor-pointer select-none text-gray-500"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      )}
                    </span>
                    <p className="text-sm font-semibold text-red-500">
                      {errors?.errors?.password?.msg}
                    </p>
                  </div>

                  <div className="relative space-y-2">
                    <FormInput
                      label="confirm password"
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Enter store confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span
                      className="absolute bottom-2 right-1 cursor-pointer select-none text-gray-500"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                      {showConfirmPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      )}
                    </span>
                    <p className="text-sm font-semibold text-red-500">
                      {errors?.errors?.confirmPassword?.msg}
                    </p>
                  </div>
                  <Button className="w-full" disabled={loading}>
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
                      "Create"
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
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateStore;
