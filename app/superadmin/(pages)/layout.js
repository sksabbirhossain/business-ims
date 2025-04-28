/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import Header from "@/components/superAdmin/Header/Header";
import Sidebar from "@/components/superAdmin/Sidebar/Sidebar";



export default function RootLayout({ children }) {
  return (
    <div className="h-full min-h-screen w-full bg-bg">
      <Header />
      <Sidebar />
      <div className="pt-[45px] sm:ml-52">
        <div className="p-2 sm:p-4">{children}</div>
      </div>
    </div>
  );
}
