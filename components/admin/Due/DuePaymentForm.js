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
import { useState } from "react";

const DuePaymentForm = () => {
  const [ammount, setAmmount] = useState("");
  return (
    <form>
      <div className="space-y-3">
        <div className="flex h-full w-full justify-between gap-4 border-b pb-2">
          <p className="text-sm font-medium capitalize">Customer Name</p>
          <p className="text-sm font-semibold">Sk Sabbir Hossain</p>
        </div>
        <div className="flex h-full w-full justify-between gap-4 border-b pb-2">
          <p className="text-sm font-medium capitalize">Transaction id</p>
          <p className="text-sm font-semibold">Sk-dsf</p>
        </div>
        <div className="flex h-full w-full justify-between gap-4 border-b pb-2">
          <p className="text-sm font-medium capitalize">total price</p>
          <p className="text-sm font-semibold">34343 Tk.</p>
        </div>
        <div className="flex h-full w-full justify-between gap-4 border-b pb-2">
          <p className="text-sm font-medium capitalize">total due</p>
          <p className="text-sm font-semibold">43243 Tk.</p>
        </div>
        <FormInput
          type="number"
          placeholder="Enter Your Payment Ammount"
          name="ammount"
          value={ammount}
          onChange={(e) => setAmmount(e.target.value)}
        />
        <Button className="w-full">Add</Button>
      </div>
    </form>
  );
};

export default DuePaymentForm;
