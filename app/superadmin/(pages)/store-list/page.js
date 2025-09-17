/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getAllStores } from "@/actions/superAdmin/store/storeActions";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Pagination from "@/components/common/Pagination/Pagination";
import StoreActionButtons from "@/components/superAdmin/Store/StoreActionButtons";
import { format } from "date-fns";
import Image from "next/image";

export const metadata = {
  title: "Store List",
};

const StoreList = async ({ searchParams }) => {
  const { page, limit } = await searchParams;

  const stores = await getAllStores(limit, page);

  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="Store list" />

      {/* all store list table */}
      <div className="table-container relative overflow-x-auto rounded-md shadow-sm shadow-primary">
        <table className="w-full text-left text-sm text-text/80 rtl:text-right">
          <thead className="bg-primary/25 text-xs uppercase text-text">
            <tr className="text-nowrap text-center">
              <th scope="col" className="px-2 py-4">
                image
              </th>
              <th scope="col" className="px-2 py-4">
                store name
              </th>
              <th scope="col" className="px-2 py-4">
                owner name
              </th>
              <th scope="col" className="px-2 py-4">
                contact number
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                created Date
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                status
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {stores?.data?.map((store) => (
              <tr
                className="text-nowrap border-b text-center odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10"
                key={store._id}
              >
                <td className="flex w-full items-center justify-center p-2">
                  <Image
                    src={store.picture ? store.picture : "/images/default.jpg"}
                    alt="product image"
                    width={200}
                    height={200}
                    className="h-[35px] w-[35px] rounded-full object-cover ring-1 ring-primary"
                  />
                </td>
                <th className="whitespace-nowrap px-2 py-4 font-medium text-gray-900">
                  {store.storeName ? store.storeName : "N/A"}
                </th>
                <th className="whitespace-nowrap px-2 py-4 font-medium text-gray-900">
                  {store.ownerName ? store.ownerName : "N/A"}
                </th>
                <td className="px-2 py-1">{store?.phone}</td>
                <td className="px-2 py-1">
                  {format(store?.createdAt, "d MMM yyyy")}
                </td>
                <td className="px-2 py-1">
                  {store?.isActive ? (
                    <span className="font-semibold text-green-600">Active</span>
                  ) : (
                    <span className="font-semibold text-red-600">Inactive</span>
                  )}
                </td>
                <td className="px-2 py-1">
                  <StoreActionButtons id={store?._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* error message */}
        {stores?.data?.length === 0 && (
          <p className="py-3 text-center font-semibold capitalize">
            No store found!
          </p>
        )}
      </div>
      {/* pagination  */}
      <div className="flex w-full justify-end pr-3">
        <Pagination data={stores} />
      </div>
    </Container>
  );
};

export default StoreList;
