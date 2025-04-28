/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import AddSupplierForm from "@/components/admin/Supplier/AddSupplier/AddSupplierForm";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export const metadata = {
  title: "Add Supplier",
};

const AddSupplier = () => {
  return (
    <Container>
      {/* page heading */}
      <PageHeader headText="Add supplier" />
      {/* supplier add form */}
      <section className="flex h-full min-h-[75vh] w-full items-center rounded-md bg-white px-2 py-5 shadow-sm shadow-primary">
        <AddSupplierForm />
      </section>
    </Container>
  );
};

export default AddSupplier;
