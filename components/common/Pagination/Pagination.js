/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";

import Link from "next/link";

const generatePageNumbers = (currentPage, totalPages) => {
  const pages = [];
  const visiblePages = 3; // Number of pages before and after the current page to show

  if (totalPages <= 6) {
    // If the total number of pages is less than or equal to 6, show all pages
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Always show the first 3 pages
  pages.push(1, 2, 3);

  // Show "..." if current page is far from the first 3 pages
  if (currentPage > visiblePages + 2) {
    pages.push("...");
  }

  // Show the current page and surrounding pages (2 before, 2 after), but avoid duplicates
  if (currentPage > visiblePages && !pages.includes(currentPage - 1)) {
    pages.push(currentPage - 1);
  }

  if (!pages.includes(currentPage)) {
    pages.push(currentPage);
  }

  if (
    currentPage < totalPages - visiblePages &&
    !pages.includes(currentPage + 1)
  ) {
    pages.push(currentPage + 1);
  }

  // Show "..." if current page is far from the last 3 pages
  if (currentPage < totalPages - visiblePages - 1 && !pages.includes("...")) {
    pages.push("...");
  }

  // Always show the last 3 pages, but avoid duplicates
  if (!pages.includes(totalPages - 2)) {
    pages.push(totalPages - 2);
  }

  if (!pages.includes(totalPages - 1)) {
    pages.push(totalPages - 1);
  }

  if (!pages.includes(totalPages)) {
    pages.push(totalPages);
  }

  if (currentPage === totalPages) pages.pop();

  return pages;
};

const Pagination = ({ data }) => {
  const pages = generatePageNumbers(data?.currentPage, data?.totalPages);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Previous Page */}
      {data?.currentPage > 1 && (
        <Link href={`?page=${data?.currentPage - 1}`}>
          <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[9px] border border-primary p-1 text-base font-semibold transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white">
            <span>◀</span>
          </div>
        </Link>
      )}

      {/* Page Numbers */}
      {pages.map((p, index) =>
        p === "..." ? (
          <span key={index} className="px-2 text-lg">
            ...
          </span>
        ) : (
          <Link href={`?page=${p}`} key={index}>
            <div
              className={`flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[9px] border border-primary p-1 text-base font-semibold transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white ${
                p === data?.currentPage
                  ? "pagination-active bg-primary text-white"
                  : ""
              }`}
            >
              <span>{p}</span>
            </div>
          </Link>
        ),
      )}

      {/* Next Page */}
      {data?.currentPage < data?.totalPages && (
        <Link href={`?page=${data?.currentPage + 1}`}>
          <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[9px] border border-primary p-1 text-base font-semibold transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white">
            <span>▶</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
