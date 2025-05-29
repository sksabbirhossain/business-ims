/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import ChangePasswordForm from "@/components/admin/Security/ChangePasswordForm";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export const metadata = {
  title: "Change Password | Admin | Security",
  description: "Change your password for better security",
};

const Security = () => {
  return (
    <Container>
      {/* page heading */}
      <PageHeader headText="Change password" />
      {/* page content */}
      <div className="rounded-lg bg-white/50 p-4 shadow-md backdrop-blur">
        <div className="flex h-full min-h-[73vh] w-full items-center justify-center">
          <div className="w-full max-w-sm space-y-3 rounded px-3 py-8 shadow">
            <div className="">
              <h2 className="text-lg font-semibold text-gray-800">
                Change Password
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Your new password must be different from previous used passwords
                and should be at least 8 characters long, containing a mix of
                letters, numbers, and special characters for better security.
              </p>
            </div>
            <ChangePasswordForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Security;
