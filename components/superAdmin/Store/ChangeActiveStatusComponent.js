/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";

import { changeStoreActiveStatus } from "@/actions/superAdmin/store/storeActions";
import { useState } from "react";
import { toast } from "react-toastify";

const ChangeActiveStatusComponent = ({ storeDetails }) => {
  const [isActive, setIsActive] = useState(storeDetails?.data?.isActive);

  // Function to handle status change
  const handleChange = async (newStatus) => {
    if (newStatus === isActive) return; // No change

    const confirmed = window.confirm(
      "Are you sure you want to change the active status?",
    );
    if (!confirmed) return;

    try {
      // API call
      const data = await changeStoreActiveStatus(
        storeDetails?.data?._id,
        newStatus,
      );

      // Check if the response contains errors
      if (data?.errors) {
        toast.error(data?.errors?.common?.msg || "Failed to update status");
        return;
      } else {
        // Update UI
        setIsActive(newStatus);
        toast.success(
          `Store status changed to ${newStatus ? "Active" : "Inactive"} successfully!`,
        );
      }
    } catch (err) {
      toast.error(` ${err.message || "Something went wrong"}`);
    }
  };

  return (
    <div className="flex gap-4">
      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="radio"
          name="status"
          checked={isActive === true}
          onChange={() => handleChange(true)}
        />
        <span className="text-[15px] font-normal text-gray-800">Active</span>
      </label>

      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="radio"
          name="status"
          checked={isActive === false}
          onChange={() => handleChange(false)}
        />
        <span className="text-[15px] font-normal text-gray-800">Inactive</span>
      </label>
    </div>
  );
};

export default ChangeActiveStatusComponent;
