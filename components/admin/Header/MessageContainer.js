/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */
"use client";

import Link from "next/link";

const MessageContainer = () => {
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
                d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
              />
            </svg>

            <p className="text-center text-[15px] font-normal">
              No messages available!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageContainer;
