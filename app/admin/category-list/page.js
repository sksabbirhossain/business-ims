/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getCategories } from "@/actions/storeAdmin/category/categoryActions";
import CategoryItem from "@/components/admin/Category-list/CategoryItem";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Pagination from "@/components/common/Pagination/Pagination";

export const metadata = {
  title: "Category List",
};

const CategoryList = async ({ searchParams }) => {
  const { page, limit } = await searchParams;

  const data = await getCategories(limit, page);

  // decide what to render
  let content;

  if (data?.errors) {
    content = <p className="py-3 text-center">{data?.errors?.common?.msg}</p>;
  }

  if (data?.data && data?.data?.length > 0) {
    content = data?.data?.map((category) => (
      <CategoryItem key={category._id} category={category} />
    ));
  }

  return (
    <Container className="group relative w-full">
      {/* add page header */}
      <PageHeader headText="category List" />
      {/* category table */}
      <div className="table-container relative overflow-x-auto rounded-md shadow-sm shadow-primary">
        <table className="w-full text-left text-sm text-text/80 rtl:text-right">
          <thead className="bg-primary/25 text-xs uppercase text-text">
            <tr>
              <th scope="col" className="px-2 py-4">
                Category image
              </th>
              <th scope="col" className="px-2 py-4">
                Category name
              </th>
              <th scope="col" className="px-2 py-4">
                Description
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
        {data?.data && data?.data?.length === 0 && (
          <p className="py-4 text-center font-medium text-black/70">
            No category found!
          </p>
        )}
      </div>

      {/* pagination  */}
      <div className="flex w-full justify-end pr-3">
        <Pagination data={data} />
      </div>
    </Container>
  );
};

export default CategoryList;
