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
import { useState } from "react";
import { toast } from "react-toastify";

const AddEmployeeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [monthlySalary, setMonthlySalary] = useState(null);
  const [joiningDate, setJoiningDate] = useState(Date.now());
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
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/employee/create`,
        {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            phone,
            position,
            monthlySalary,
            joiningDate,
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
        setEmail(""),
          setPhone(""),
          setPosition(""),
          setMonthlySalary(0),
          setJoiningDate(Date.now()),
          SetPicture(null);
        toast.success("Employee Added Successful!");
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
            label={"employee name"}
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
          <FormInput
            label={"Employee Email"}
            type="email"
            value={email}
            name="email"
            placeholder="enter employee email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.email?.msg}
          </p>
        </div>
        <div className="space-y-2">
          <FormInput
            label={"Employee phone"}
            type="number"
            value={phone}
            name="phone"
            placeholder="enter employee phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.phone?.msg}
          </p>
        </div>
        <div className="space-y-2">
          <FormInput
            label={"Employee position"}
            type="text"
            value={position}
            name="position"
            placeholder="enter employee position"
            onChange={(e) => setPosition(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.position?.msg}
          </p>
        </div>
        <div className="space-y-2">
          <FormInput
            label={"Employee joining date"}
            type="date"
            value={joiningDate}
            name="joiningDate"
            placeholder="enter employee joining date"
            onChange={(e) => setJoiningDate(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.joiningDate?.msg}
          </p>
        </div>
        <div className="space-y-2">
          <FormInput
            label={"Employee monthly Salary"}
            type="number"
            value={monthlySalary}
            name="monthlySalary"
            placeholder="enter employee monthly salary"
            onChange={(e) => setMonthlySalary(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.monthlySalary?.msg}
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
        <Button
          className="w-full !uppercase"
          disabled={loading}
          isPending={loading}
        >
          add employee
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

export default AddEmployeeForm;
