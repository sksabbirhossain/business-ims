/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getCustomers } from "@/actions/storeAdmin/customer/customerActions";
import CustomerItem from "@/components/admin/Customer/CustomerItem";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Pagination from "@/components/common/Pagination/Pagination";

export const metadata = {
  title: "Customer List",
};

const CustomerList = async ({ searchParams }) => {
  const { page, limit } = await searchParams;

  const data = await getCustomers(limit, page);

  // decide what to render
  let content;

  if (data?.errors) {
    content = <p className="py-3 text-center">{data?.errors?.common?.msg}</p>;
  }

  if (data?.data && data?.data?.length > 0) {
    content = data?.data?.map((customer) => (
      <CustomerItem key={customer._id} customer={customer} />
    ));
  }

  return (
    <Container className="group relative w-full">
      {/* add page header */}
      <PageHeader headText="customer List" />
      {/* category table */}
      <div className="table-container relative overflow-x-auto rounded-md shadow-sm shadow-primary">
        <table className="w-full text-left text-sm text-text/80 rtl:text-right">
          <thead className="text-nowrap bg-primary/25 text-center text-xs uppercase text-text">
            <tr>
              <th scope="col" className="px-2 py-4">
                image
              </th>
              <th scope="col" className="px-2 py-4">
                name
              </th>
              <th scope="col" className="px-2 py-4">
                email
              </th>
              <th scope="col" className="px-2 py-4">
                phone
              </th>
              <th scope="col" className="px-2 py-4">
                address
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
            No customer found!
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
export default CustomerList;
