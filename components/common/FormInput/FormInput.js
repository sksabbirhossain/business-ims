/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

const FormInput = ({
  label,
  type,
  name,
  placeholder,
  value,
  className,
  ...rest
}) => {
  return (
    <div className="flex w-full flex-col space-y-1">
      {label != 0 && (
        <label
          htmlFor=""
          className="text-base font-medium capitalize text-text"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        {...rest}
        className={`w-full rounded-[3px] px-1.5 py-2 text-sm ring-1 ring-primary placeholder:capitalize focus:outline-none focus:ring-1 focus:ring-green-700 ${className}`}
      />
    </div>
  );
};

export default FormInput;
