/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import React from "react";

const SelectInput = ({ children, label, name, ...rest }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="" className="text-base font-normal capitalize">
        {label}
      </label>

      <select
        name={name}
        className="rounded-[3px] bg-white px-1.5 py-2 text-sm ring-1 ring-primary focus:outline-none"
        {...rest}
      >
        {children}
      </select>
    </div>
  );
};

export default SelectInput;
