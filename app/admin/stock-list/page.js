/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getStocks } from "@/actions/storeAdmin/stock/stockActions";
import ActionButtons from "@/components/admin/Stock/ActionButtons";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Pagination from "@/components/common/Pagination/Pagination";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Stock List",
};

const StockList = async ({ searchParams }) => {
  const { page, limit } = await searchParams;
  //get all the stock
  const stocks = await getStocks(limit, page);

  return (
    <Container>
      {/* add page header */}
      <PageHeader
        headText="stcok list"
        link="/admin/add-stock"
        linkName="add stcok"
      />

      {/* all stock list table */}
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
                supplier
              </th>
              <th scope="col" className="px-2 py-4">
                Quantity
              </th>
              <th scope="col" className="px-2 py-4">
                selling Price
              </th>
              <th scope="col" className="px-2 py-4">
                total Price
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {stocks?.data?.map((stock) => (
              <tr
                className="text-nowrap border-b text-center font-medium odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10"
                key={stock._id}
              >
                <td className="flex h-full w-full items-center justify-center px-2 py-1">
                  <Image
                    src={stock.picture ? stock.picture : "/default.jpg"}
                    alt="product image"
                    width={200}
                    height={200}
                    className="h-[35px] w-[35px] rounded-full object-cover ring-1 ring-primary"
                  />
                </td>
                <th className="whitespace-nowrap px-2 py-1 font-medium">
                  {stock.name}
                </th>
                <td className="whitespace-nowrap px-2 py-1">
                  {stock?.supplierInfo?.name}
                </td>
                <td className="px-2 py-1">
                  {stock?.quantity} - {stock?.uom}
                </td>
                <td className="px-2 py-1">{stock?.sellingPrice} Tk.</td>
                <td className="px-2 py-1">{stock?.totalPrice} Tk.</td>

                <td className="px-2 py-1 text-center">
                  <ActionButtons id={stock._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* error message */}
        {stocks?.data?.length === 0 && (
          <p className="py-3 text-center font-semibold capitalize">
            No Stock found!
          </p>
        )}
      </div>
      {/* pagination  */}
      <div className="flex w-full justify-end pr-3">
        <Pagination data={stocks} />
      </div>
    </Container>
  );
};

export default StockList;
