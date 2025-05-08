/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { returnSales } from "@/actions/storeAdmin/returnSale/returnSaleActions";
import ReturnSaleItem from "@/components/admin/ReturnSales/ReturnSaleItem";
import SearchContainer from "@/components/admin/ReturnSales/SearchContainer";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Pagination from "@/components/common/Pagination/Pagination";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Return Sales",
};

const ReturnSales = async ({ searchParams }) => {
  const { page, limit } = await searchParams;
  //get all return sales
  const returnSale = await returnSales(limit, page);

  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="Return Sale" />
      <div className="space-y-10 rounded-md bg-white px-2 py-5 shadow-md">
        {/* search products and return sale search list */}
        <SearchContainer />

        {/* return sales list table*/}
        <div className="space-y-3">
          <p className="text-sm font-medium capitalize">return sale list</p>
          <div className="space-y-5">
            <div className="table-container relative overflow-x-auto rounded-md shadow-sm shadow-primary">
              <table className="w-full text-left text-sm text-text/80 rtl:text-right">
                <thead className="bg-primary/25 text-center text-xs uppercase text-text">
                  <tr>
                    <th scope="col" className="px-2 py-4">
                      Product image
                    </th>
                    <th scope="col" className="px-2 py-4">
                      Product name
                    </th>
                    <th scope="col" className="px-2 py-4">
                      customer name
                    </th>
                    <th scope="col" className="px-2 py-4">
                      Quantity
                    </th>
                    <th scope="col" className="px-2 py-4">
                      total Price
                    </th>
                    <th scope="col" className="px-2 py-4">
                      Transaction ID
                    </th>
                    <th scope="col" className="px-2 py-4">
                      returned Date
                    </th>
                    <th scope="col" className="px-2 py-4 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* showing all return sales products */}
                  {returnSale?.data &&
                    returnSale?.data?.map((item) => (
                      <ReturnSaleItem key={item._id} sale={item} />
                    ))}
                </tbody>
              </table>
              {returnSale?.data?.length === 0 && (
                <p className="py-3 text-center font-semibold text-primary">
                  No Return Sales Found!
                </p>
              )}
            </div>
            {/* pagination  */}
            <div className="flex w-full justify-end pr-3">
              <Pagination data={returnSale} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ReturnSales;
