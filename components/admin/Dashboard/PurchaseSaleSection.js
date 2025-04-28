/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PurchaseSalesChart from "./PurchaseSalesChart";

const PurchaseSaleSection = ({ data }) => {
  const [newDate, setNewDate] = useState(new Date());
  const handleYearChange = (date) => {
    setNewDate(date);
    alert(date?.getFullYear());
  };
  return (
    <>
      <div className="flex flex-wrap items-center justify-between lg:flex-nowrap">
        <div>
          <h3 className="text-lg font-semibold capitalize">purchase & sales</h3>
        </div>
        <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
          <p className="flex items-center gap-1 text-sm font-medium">
            <span className="inline-block h-3 w-3 rounded-full bg-primary capitalize"></span>
            Sales
          </p>
          <p className="flex items-center gap-1 text-sm font-medium">
            <span className="inline-block h-3 w-3 rounded-full bg-red-400 capitalize"></span>
            purchase
          </p>
          <DatePicker
            selected={newDate}
            onChange={handleYearChange}
            showYearPicker
            dateFormat="yyyy"
            className="w-14 cursor-pointer rounded px-2 py-1 ring-2 ring-gray-200 focus:outline-none"
          />
        </div>
      </div>

      {/* Purchase and Sales Chart */}
      <div className="h-full max-h-[370px] w-full">
        <PurchaseSalesChart data={data} />
      </div>
    </>
  );
};

export default PurchaseSaleSection;
