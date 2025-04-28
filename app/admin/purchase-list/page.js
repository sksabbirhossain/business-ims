/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getPurchases } from "@/actions/storeAdmin/purchase/purchaseActions";
import ActionButtons from "@/components/admin/Purchase/ActionButtons";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Pagination from "@/components/common/Pagination/Pagination";
import Image from "next/image";

export const metadata = {
  title: "Purchase List",
};

const AllPurchase = async ({ searchParams }) => {
  const { page, limit } = await searchParams;
  const purchases = await getPurchases(limit, page);
  const data = purchases;
  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="all purchase" />

      {/* all purchase item table */}
      <div className="table-container relative overflow-x-auto rounded-md shadow-sm shadow-primary">
        <table className="w-full text-left text-sm text-text/80 rtl:text-right">
          <thead className="bg-primary/25 text-xs uppercase text-text">
            <tr className="text-nowrap text-center">
              <th scope="col" className="px-2 py-4">
                Product image
              </th>
              <th scope="col" className="px-2 py-4">
                Product name
              </th>
              <th scope="col" className="px-2 py-4">
                Supplier
              </th>
              <th scope="col" className="px-2 py-4">
                Quantity
              </th>
              <th scope="col" className="px-2 py-4">
                Selling Price
              </th>
              <th scope="col" className="px-2 py-4">
                Total Price
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((purchase) => (
              <tr
                className="text-nowrap border-b text-center odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10"
                key={purchase._id}
              >
                <td className="flex w-full items-center justify-center px-2 pt-2">
                  <Image
                    src={purchase.picture ? purchase.picture : "/default.jpg"}
                    alt="product image"
                    width={200}
                    height={200}
                    className="h-[35px] w-[35px] rounded-full object-cover ring-1 ring-primary"
                  />
                </td>
                <th
                  scope="row"
                  className="whitespace-nowrap px-2 py-4 font-medium text-gray-900"
                >
                  {purchase.name}
                </th>
                <td className="px-2 py-1">{purchase?.supplierInfo?.name}</td>
                <td className="px-2 py-1">
                  {purchase?.quantity} - {purchase?.uom}
                </td>
                <td className="px-2 py-1">{purchase?.sellingPrice} Tk.</td>
                <td className="px-2 py-1">{purchase?.totalPrice} Tk.</td>
                <td className="px-2 py-1">
                  <ActionButtons id={purchase?._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* error message */}
        {data?.data?.length === 0 && (
          <p className="py-3 text-center font-semibold capitalize">
            No Purchase found!
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

export default AllPurchase;
