import React from "react";

const SubscriptionSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4 px-2 sm:px-0">
      {/* Optional: Table Header Placeholder */}
      <div className="h-12 w-full rounded bg-gray-50" />
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-full max-w-[500px] space-y-5 rounded-lg bg-gray-50 p-4">
          <div className="flex flex-wrap justify-between gap-5 rounded-md sm:flex-nowrap">
            <div className="h-24 w-full bg-gray-200 sm:max-w-[250px]" />
            <div className="h-24 w-full bg-gray-200 sm:max-w-[250px]" />
          </div>
          <div className="flex flex-wrap justify-between gap-5 rounded-md sm:flex-nowrap">
            <div className="h-24 w-full bg-gray-200 sm:max-w-[250px]" />
            <div className="h-24 w-full bg-gray-200 sm:max-w-[250px]" />
          </div>
          <div className="">
            {/* create input filed skeleton */}
            <div className="mb-4 h-10 w-full bg-gray-200" />
            <div className="flex gap-3">
              <div className="mb-4 h-10 w-full bg-gray-200" />
              <div className="mb-4 h-10 w-full bg-gray-200" />
            </div>
            <div className="flex gap-3">
              <div className="mb-4 h-10 w-full bg-gray-200" />
              <div className="mb-4 h-10 w-full bg-gray-200" />
            </div>
            <div className="mb-4 h-10 w-full bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSkeleton;
