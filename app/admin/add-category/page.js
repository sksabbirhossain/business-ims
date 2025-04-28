/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import AddCategoryForm from "@/components/admin/AddCategory/AddCategoryForm";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export const metadata = {
  title: "Add Category",
};

const AddCategory = () => {
  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="add category" />

      {/* add category form */}
      <div className="flex h-[75vh] w-full items-center justify-center rounded-md bg-white px-2 py-5 shadow-sm shadow-primary">
        <div className="w-full max-w-[400px] rounded p-5 shadow">
          {/* form componet */}
          <AddCategoryForm />
        </div>
      </div>
    </Container>
  );
};

export default AddCategory;
