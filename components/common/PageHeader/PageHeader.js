/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import Link from "next/link";
import React from "react";

const PageHeader = ({ headText, link, linkName }) => {
  return (
    <div className="flex items-center justify-between rounded-md bg-white/50 px-2 py-3 shadow-sm shadow-primary backdrop-blur">
      <h1 className="text-lg font-semibold uppercase text-text">{headText}</h1>
      {link && linkName && (
        <Link href={link}>
          <span className="rounded bg-primary px-3 py-1 font-medium capitalize text-white transition-all duration-200 ease-in-out hover:bg-secondary">
            {linkName}
          </span>
        </Link>
      )}
    </div>
  );
};

export default PageHeader;
