/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */
"use client";

import Link from "next/link";

const SettingsContainer = () => {
  return (
    <div className="">
      <ul>
        <li className="list-item border-b border-primary px-4 py-3 text-[15px] font-medium uppercase hover:bg-primary/60">
          <Link href="/admin/subscription">subscription</Link>
        </li>
        <li className="list-item border-b border-primary px-4 py-3 text-[15px] font-medium uppercase hover:bg-primary/60">
          <Link href="/admin/security">security</Link>
        </li>
        <li className="list-item border-b border-primary px-4 py-3 text-[15px] font-medium uppercase hover:bg-primary/60">
          <Link href="/admin/profile">Personal info</Link>
        </li>
      </ul>
    </div>
  );
};

export default SettingsContainer;
