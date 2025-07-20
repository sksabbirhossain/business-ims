/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [filter, setFilter] = useState(searchParams.get("filter") || "");

  // Update URL on change
  useEffect(() => {
    // Start with existing params
    const params = new URLSearchParams(searchParams.toString());

    // Update the ones you want
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }

    if (filter) {
      params.set("filter", filter);
    } else {
      params.delete("filter");
    }

    router.push(`?${params.toString()}`);
  }, [query, filter, router, searchParams]);

  return (
    <div className="flex items-center justify-end gap-2">
      {/* input */}
      <div className="flex w-full max-w-[300px] items-center gap-2 rounded-md px-1.5 text-sm ring-1 ring-primary focus-within:ring-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-6 cursor-pointer text-[#169960]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </span>
        <input
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter Transaction ID"
          className="w-full bg-transparent py-2 placeholder:capitalize focus:outline-none"
        />
      </div>

      {/* filter */}
      <button className="flex items-center rounded-md bg-primary/40 px-1 py-2 shadow-sm ring-1 ring-primary backdrop-blur hover:bg-primary/70">
        <svg
          className="mr-1 size-5 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-.447.832l-4 2.5A1 1 0 019 21.5V12.414L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>
        <select
          name="filter"
          onChange={(e) => setFilter(e.target.value)}
          className="w-[70px] bg-transparent text-sm font-semibold text-gray-800 focus:outline-none"
        >
          <option value="all">Filters</option>
          <option value="due">Due Sales</option>
          <option value="completed">Complete Sales</option>
        </select>
      </button>
    </div>
  );
};

export default SearchFilter;
