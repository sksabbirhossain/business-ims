/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getCategories } from "@/actions/storeAdmin/category/categoryActions";
import { getStock } from "@/actions/storeAdmin/stock/stockActions";
import { getSuppliers } from "@/actions/storeAdmin/supplier/supplierActions";
import StockUpdateForm from "@/components/admin/Stock/StockUpdateForm";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export const metadata = {
  title: "Update Stock",
};

const UpdateStock = async ({ params }) => {
  const stockId = (await params).stockId;
  //get categories
  const categories = await getCategories();
  //get suppliers
  const suppliers = await getSuppliers();
  //get purchase details by id
  const stock = await getStock(stockId);

  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="Update Stock" />

      {/* update product form */}
      <StockUpdateForm
        categories={categories}
        suppliers={suppliers}
        stock={stock}
      />
    </Container>
  );
};

export default UpdateStock;
