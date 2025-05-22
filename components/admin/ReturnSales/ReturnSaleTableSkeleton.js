import React from "react";

const ReturnSaleTableSkeleton = ({ rows = 8, cols = 6 }) => {
  return (
    <div className="animate-pulse space-y-4 px-2 sm:px-0">
      {/* Optional: Table Header Placeholder */}
      <div className="h-12 w-full rounded bg-gray-50" />

      {/*search sales  */}
      <div className="space-y-3 pb-9">
        <div className="flex h-full w-full justify-end rounded-md pb-5">
          <div className="flex h-full w-[40%] justify-end gap-2">
            <div className="h-10 w-full max-w-[70%] rounded-md bg-gray-50" />
            <div className="h-10 w-full max-w-[30%] rounded-md bg-gray-50" />
          </div>
        </div>
        <div className="table-container overflow-x-auto rounded-md shadow-sm shadow-primary">
          <table className="w-full text-left text-sm text-text/80 rtl:text-right">
            <thead className="bg-primary/25 text-center text-xs uppercase text-text">
              <tr>
                {Array(6)
                  .fill(0)
                  .map((_, idx) => (
                    <th key={idx} className="px-2 py-4">
                      <div className="mx-auto h-3 w-20 rounded bg-gray-50" />
                    </th>
                  ))}
              </tr>
            </thead>

            <tbody>
              {Array(3)
                .fill(0)
                .map((_, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className="border-b text-center odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10"
                  >
                    {Array(6)
                      .fill(0)
                      .map((_, colIdx) => (
                        <td key={colIdx} className="px-2 py-4">
                          <div className="mx-auto h-4 w-full max-w-[120px] rounded bg-gray-50" />
                        </td>
                      ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Skeleton Table */}
      <div className="space-y-3">
        <div className="h-5 w-full max-w-[20%] rounded-md bg-gray-50" />
        <div className="table-container overflow-x-auto rounded-md shadow-sm shadow-primary">
          <table className="w-full text-left text-sm text-text/80 rtl:text-right">
            <thead className="bg-primary/25 text-center text-xs uppercase text-text">
              <tr>
                {Array(cols)
                  .fill(0)
                  .map((_, idx) => (
                    <th key={idx} className="px-2 py-4">
                      <div className="mx-auto h-3 w-20 rounded bg-gray-50" />
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
                          <div className="mx-auto h-4 w-full max-w-[120px] rounded bg-gray-50" />
                        </td>
                      ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Placeholder */}
      <div className="flex justify-end pt-4">
        <div className="h-8 w-32 rounded bg-gray-50" />
      </div>
    </div>
  );
};

export default ReturnSaleTableSkeleton;
