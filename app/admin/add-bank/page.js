/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import AddBankForm from "@/components/admin/Bank/AddBankForm";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export const metadata = {
  title: "Add Bank",
};

const AddBank = () => {
  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="add bank" />

      {/* add category form */}
      <div className="flex h-full min-h-[75vh] w-full items-center justify-center rounded-md bg-white/50 p-4 px-2 py-5 shadow-sm shadow-primary backdrop-blur">
        <div className="w-full max-w-[600px] rounded p-5 shadow">
          {/* form componet */}
          <AddBankForm />
        </div>
      </div>
    </Container>
  );
};

export default AddBank;
