/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getAllSales } from "@/actions/storeAdmin/sales/salesActions";
import ActionButtons from "@/components/admin/Sales/Sales-list/ActionButtons";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Pagination from "@/components/common/Pagination/Pagination";
import { format } from "date-fns";

export const metadata = {
  title: "All Sales",
};

const AllSales = async ({ searchParams }) => {
  const { page, limit } = await searchParams;
  const sales = await getAllSales(limit, page);

  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="all sales" />

      {/* all purchase item table */}
      <div className="table-container relative overflow-x-auto rounded-md shadow-sm shadow-primary">
        <table className="w-full text-left text-sm text-text/80 rtl:text-right">
          <thead className="bg-primary/25 text-center text-xs uppercase text-text">
            <tr>
              <th scope="col" className="px-2 py-4">
                customer name
              </th>

              <th scope="col" className="px-2 py-4">
                payment Method
              </th>
              <th scope="col" className="px-2 py-4">
                Total Price
              </th>
              <th scope="col" className="px-2 py-4">
                Transaction ID
              </th>
              <th scope="col" className="px-2 py-4">
                date
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* showing sales */}
            {sales?.data?.map((sale) => (
              <tr
                className="border-b text-center odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10"
                key={sale._id}
              >
                <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-900">
                  {sale.customer?.name || "N/A"}
                </td>
                <th
                  scope="row"
                  className="whitespace-nowrap px-2 py-4 font-medium text-gray-900"
                >
                  {sale?.paymentMethod}
                </th>
                <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-800">
                  {sale?.totalPrice} Tk.
                </td>
                <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-800">
                  {sale?.trxid || "N/A"}
                </td>
                <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-800">
                  {format(new Date(sale?.createdAt), "dd MMM yyyy")}
                </td>
                <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-800">
                  <ActionButtons id={sale._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {sales?.data?.length === 0 && (
          <p className="text-md py-4 text-center font-semibold capitalize text-text">
            no sales found!
          </p>
        )}
      </div>
      {/* pagination  */}
      <div className="flex h-full w-full justify-end">
        <Pagination data={sales} />
      </div>
    </Container>
  );
};

export default AllSales;
