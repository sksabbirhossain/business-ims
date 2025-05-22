/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

const FormSkeleton = () => {
  return (
    <div className="w-full animate-pulse space-y-6 rounded-md bg-white/10 px-2 shadow">
      {/* Form title */}
      <div className="h-12 w-full rounded bg-gray-50"></div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Form fields */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 w-24 rounded bg-gray-50"></div>
            <div className="h-10 rounded bg-gray-50"></div>
          </div>
        ))}
        {/* Form fields */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 w-24 rounded bg-gray-50"></div>
            <div className="h-10 rounded bg-gray-50"></div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="flex h-10 w-full justify-end rounded">
        <div className="h-10 w-[49%] rounded bg-gray-50"></div>
      </div>
    </div>
  );
};

export default FormSkeleton;
