/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */
"use client";

import Link from "next/link";

const NotificationContainer = () => {
  const messages = false;
  return (
    <div className="h-full w-full">
      {messages ? (
        <div>
          <ul>
            <li className="list-item border-b px-4 py-3 text-[15px] font-medium uppercase hover:bg-primary/60">
              <Link href="/admin/subscription">subscription</Link>
            </li>
            <li className="list-item border-b px-4 py-3 text-[15px] font-medium uppercase hover:bg-primary/60">
              <Link href="/admin/security">security</Link>
            </li>
            <li className="list-item border-b px-4 py-3 text-[15px] font-medium uppercase hover:bg-primary/60">
              <Link href="/admin/profile">Personal info</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"
              />
            </svg>

            <p className="text-center text-[15px] font-normal">
              No notification available!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationContainer;
