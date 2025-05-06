/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */
"use client";

import { DeleteEmployeeSalary } from "@/actions/storeAdmin/employee/employeeActions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const HistoryCardActionButtons = ({ salary, employeeId }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // delete a purchase
  const handleDelete = async (employeeId, salaryId) => {
    setLoading(true);
    try {
      const isSure = confirm("Are you sure you wanna delete this?");
      if (isSure) {
        const result = await DeleteEmployeeSalary(employeeId, salaryId);
        if (result?.data?._id) {
          toast.success("Salary deleted successfully");
          router.refresh(`/admin/employee-details/${employeeId}`);
        } else {
          toast.error("Failed to delete the Employee salary!");
        }
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <div className="absolute right-2 flex gap-x-1">
      {/* <span className="hidden h-[20px] w-[20px] cursor-pointer select-none items-center justify-center rounded bg-green-800 text-sm font-medium text-white hover:shadow group-hover:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-3.5"
        >
          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
        </svg>
      </span> */}
      <span
        className="hidden h-[20px] w-[20px] cursor-pointer select-none items-center justify-center rounded bg-red-500 text-sm font-medium text-white hover:shadow group-hover:flex"
        onClick={() => handleDelete(employeeId, salary?._id)}
        disabled={loading}
      >
        X
      </span>
    </div>
  );
};

export default HistoryCardActionButtons;
