/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import LoginForm from "@/components/superAdmin/Login/LoginForm";

export const metadata = {
  title: "Super Admin Login",
};

const SuperAdminLogin = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center bg-bg px-2 sm:px-0">
      <div className="h-auto w-full max-w-[350px]">
        <div className="w-full space-y-6 rounded-md bg-white px-4 py-10 shadow-md">
          <div className="space-y-1 text-center">
            <p className="text-lg font-semibold capitalize text-text">
              welcome back!
            </p>
            <p className="text-sm capitalize">
              login as super admin and manage all store!
            </p>
          </div>
          {/* login form */}
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default SuperAdminLogin;
