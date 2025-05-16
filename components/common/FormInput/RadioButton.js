/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import React from "react";

const RadioButton = ({ name, value, ...rest }) => {
  return (
    <div className="flex w-full gap-x-3 rounded-[3px] px-1.5 py-2.5 text-sm ring-1 ring-primary placeholder:capitalize focus:outline-none focus:ring-1 focus:ring-green-700">
      <input
        id="checkbox"
        type="checkbox"
        value={value}
        name={name}
        {...rest}
      />
      <label
        htmlFor="checkbox"
        className="w-full cursor-pointer select-none font-semibold"
      >
        Add in Stock
      </label>
    </div>
  );
};

export default RadioButton;
