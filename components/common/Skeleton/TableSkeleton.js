/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

const TableSkeleton = ({ rows = 8, cols = 6 }) => {
  return (
    <div className="animate-pulse space-y-4 px-2 sm:px-0">
      {/* Optional: Table Header Placeholder */}
      <div className="h-12 w-full rounded bg-gray-50" />

      {/* Skeleton Table */}
      <div className="table-container overflow-x-auto rounded-md shadow-sm shadow-primary">
        <table className="w-full text-left text-sm text-text/80 rtl:text-right">
          <thead className="bg-primary/25 text-center text-xs uppercase text-text">
            <tr>
              {Array(cols)
                .fill(0)
                .map((_, idx) => (
                  <th key={idx} className="px-2 py-4">
                    <div className="mx-auto h-3 w-20 rounded bg-gray-300" />
                  </th>
                ))}
            </tr>
          </thead>

          <tbody>
            {Array(rows)
              .fill(0)
              .map((_, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="border-b text-center odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10"
                >
                  {Array(cols)
                    .fill(0)
                    .map((_, colIdx) => (
                      <td key={colIdx} className="px-2 py-4">
                        <div className="mx-auto h-4 w-full max-w-[120px] rounded bg-gray-300" />
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Placeholder */}
      <div className="flex justify-end pt-4">
        <div className="h-8 w-32 rounded bg-gray-50" />
      </div>
    </div>
  );
};

export default TableSkeleton;
