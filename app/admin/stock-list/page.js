import { getStocks } from "@/actions/storeAdmin/stock/stockActions";
import ActionButtons from "@/components/admin/Stock/ActionButtons";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Stock List",
};

const StockList = async () => {
  //get all the stock
  const stocks = await getStocks();

  return (
    <Container>
      {/* add page header */}
      <PageHeader
        headText="stcok list"
        link="/admin/add-stock"
        linkName="add stcok"
      />

      {/* all stock list table */}
      <div className="relative overflow-x-auto rounded-md shadow-sm shadow-primary">
        <table className="w-full text-left text-sm text-text/80 rtl:text-right">
          <thead className="bg-primary/25 text-xs uppercase text-text">
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
                purchase Price
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {stocks?.data?.map((stock) => (
              <tr
                className="border-b odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10"
                key={stock._id}
              >
                <td className="px-2 py-1">
                  <Image
                    src={stock.picture ? stock.picture : "/default.jpg"}
                    alt="product image"
                    width={200}
                    height={200}
                    className="h-[35px] w-[35px] rounded-full object-cover ring-1 ring-primary"
                  />
                </td>
                <th
                  scope="row"
                  className="whitespace-nowrap px-2 py-1 font-semibold"
                >
                  {stock.name}
                </th>
                <td className="whitespace-nowrap px-2 py-1">
                  {stock?.supplierInfo?.name}
                </td>
                <td className="px-2 py-1">
                  {stock?.quantity} - {stock?.uom}
                </td>
                <td className="px-2 py-1">{stock?.purchasePrice}</td>

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
    </Container>
  );
};

export default StockList;
