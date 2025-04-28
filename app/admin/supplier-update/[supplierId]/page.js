/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getSupplier } from "@/actions/storeAdmin/supplier/supplierActions";
import UpdateSupplierForm from "@/components/admin/Supplier/SupplierUpdate/UpdateSupplierForm";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export const metadata = {
  title: "Update Supplier",
};

const UpdateSupplier = async ({ params }) => {
  const supplierId = await params.supplierId;

  //get supplier by supplier Id
  const supplier = await getSupplier(supplierId);

  return (
    <Container>
      {/* add heading */}
      <PageHeader headText="Update Supplier" />
      {/* supplier add form */}
      <section className="flex h-full min-h-[75vh] w-full items-center rounded-md bg-white px-2 py-5 shadow-sm shadow-primary">
        <UpdateSupplierForm supplier={supplier.data} />
      </section>
    </Container>
  );
};

export default UpdateSupplier;
