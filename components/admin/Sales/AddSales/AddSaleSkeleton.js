/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

const AddSaleSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6 rounded-md bg-gradient-to-br from-gray-50 to-green-100 p-2 shadow-md">
      {/* Add Sales Title */}
      <div className="h-12 w-full rounded bg-white" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Search Products */}
          <div className="space-y-3 rounded-md border bg-white p-4">
            <div className="h-4 w-40 rounded bg-gray-50"></div>
            <div className="flex gap-2">
              <div className="h-10 flex-grow rounded border bg-gray-200"></div>
              <div className="h-10 w-20 rounded bg-gray-50"></div>
            </div>
            <div className="h-4 w-40 rounded bg-gray-200"></div>
          </div>

          {/* Cart List */}
          <div className="space-y-3 rounded-md border bg-white p-4">
            <div className="h-4 w-28 rounded bg-gray-50"></div>
            <div className="h-4 w-52 rounded bg-gray-200"></div>
          </div>
        </div>

        {/* Right Column - Customer Info */}
        <div className="space-y-4 rounded-md border bg-white p-4">
          {/* Customer Info Header */}
          <div className="h-4 w-32 rounded bg-gray-50"></div>

          {/* Tab Buttons */}
          <div className="flex gap-2">
            <div className="h-8 w-28 rounded bg-gray-50"></div>
            <div className="h-8 w-28 rounded bg-gray-200"></div>
          </div>

          {/* Input Fields */}
          {["Name", "Email", "Phone", "Address", "Discount"].map(
            (label, idx) => (
              <div key={idx}>
                <div className="mb-1 h-3 w-24 rounded bg-gray-50"></div>
                <div className="h-10 w-full rounded bg-gray-200"></div>
              </div>
            ),
          )}

          {/* Payment Method */}
          <div>
            <div className="mb-2 h-4 w-32 rounded bg-gray-50"></div>
            <div className="h-4 w-16 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSaleSkeleton;
