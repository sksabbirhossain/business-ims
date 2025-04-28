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

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Return Sales",
};

const ReturnSales = async () => {
  //get all return sales
  const sales = await returnSales();

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
            <div className="relative overflow-x-auto rounded-md shadow-sm shadow-primary">
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
                  {sales?.data &&
                    sales?.data?.map((item) => (
                      <ReturnSaleItem key={item._id} sale={item} />
                    ))}
                </tbody>
              </table>
              {sales?.data?.length === 0 && (
                <p className="py-3 text-center font-semibold text-primary">
                  No Return Sales Found!
                </p>
              )}
            </div>
            {/* pagination  */}
            <div className="flex w-full justify-end pr-3">
              <div className="flex items-center gap-2">
                <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[9px] border border-primary p-1 text-base font-semibold transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>
                <div className="pagination-active flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[9px] border border-primary p-1 text-base font-semibold transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white">
                  <span>1</span>
                </div>
                <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[9px] border border-primary p-1 text-base font-semibold transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white">
                  <span>2</span>
                </div>
                <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[9px] border border-primary p-1 text-base font-semibold transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white">
                  <span>3</span>
                </div>
                <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[9px] border border-primary p-1 text-base font-semibold transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ReturnSales;
