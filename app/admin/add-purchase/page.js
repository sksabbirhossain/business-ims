/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getCategories } from "@/actions/storeAdmin/category/categoryActions";
import { getSuppliers } from "@/actions/storeAdmin/supplier/supplierActions";
import PurchaseForm from "@/components/admin/Purchase/PurchaseForm";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Add Purchase",
};

const AddPurchase = async () => {
  //get categories
  const categories = await getCategories();
  //get suppliers
  const suppliers = await getSuppliers();
  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="add purchase" />

      {/* add product form */}
      <PurchaseForm categories={categories} suppliers={suppliers} />
    </Container>
  );
};

export default AddPurchase;
