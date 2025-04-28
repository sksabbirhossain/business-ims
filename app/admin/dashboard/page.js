/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getCategories } from "@/actions/storeAdmin/category/categoryActions";
import { getPurchaseAndSales } from "@/actions/storeAdmin/dashboard/dashboardActions";
import { getStocks } from "@/actions/storeAdmin/stock/stockActions";
import DailyBuySaleSection from "@/components/admin/Dashboard/DailyBuySaleSection";
import PurchaseSaleSection from "@/components/admin/Dashboard/PurchaseSaleSection";
import TopSection from "@/components/admin/Dashboard/TopSection";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Dashboard",
};

const Dashboard = async () => {
  // Fetch categories, stocks, and purchase/sales data in parallel
  const [categories, stocks, res] = await Promise.all([
    getCategories(6),
    getStocks(5),
    getPurchaseAndSales(),
  ]);

  return (
    <div className="space-y-4 md:space-y-6">
      <TopSection />
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {/* purchase and sales */}
        <div className="col-span-1 rounded bg-white/50 p-4 shadow shadow-primary backdrop-blur lg:col-span-2">
          <PurchaseSaleSection data={res?.data} />
        </div>

        {/* recently added categories */}
        <div className="fade-in col-span-1 space-y-4 rounded bg-white/50 p-4 shadow-sm shadow-primary backdrop-blur">
          <div className="flex flex-wrap items-center justify-between lg:flex-nowrap">
            <div>
              <h3 className="text-md font-semibold capitalize leading-5">
                recently added categories
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
              <Link href="/admin/category-list">
                <p className="flex items-center gap-1 text-nowrap text-sm font-normal capitalize">
                  view all
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 18 16"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </p>
              </Link>
            </div>
          </div>

          {/* categories */}
          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
              <thead className="bg-transparent text-center text-xs uppercase text-gray-900 backdrop-blur">
                <tr>
                  <th scope="col" className="px-2 py-3">
                    No.
                  </th>
                  <th scope="col" className="text-nowrap px-2 py-3">
                    category name
                  </th>
                  <th scope="col" className="px-2 py-3">
                    picture
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories?.data?.map((item, i) => (
                  <tr
                    className="border-b bg-transparent text-center hover:bg-primary/50 hover:text-text"
                    key={item?._id}
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                    >
                      {i + 1}
                    </th>
                    <td
                      scope="row"
                      className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                    >
                      {item?.name}
                    </td>
                    <td className="flex items-center justify-center px-2 py-3">
                      <Image
                        className="h-8 w-8 rounded-full ring-1"
                        width={100}
                        height={100}
                        src="/default.jpg"
                        alt="Jese image"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {categories?.data?.length === 0 && (
              <p className="py-3 text-center text-sm">No Cateogry Found!</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {/* daily buy and sales */}
        <div className="col-span-1 rounded bg-white/50 p-4 shadow-sm shadow-primary backdrop-blur">
          <DailyBuySaleSection />
        </div>

        {/* recently added stock */}
        <div className="col-span-1 space-y-4 rounded bg-white/50 p-4 shadow-sm shadow-primary backdrop-blur lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between lg:flex-nowrap">
            <div>
              <h3 className="text-lg font-semibold capitalize leading-5">
                recently added stocks
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
              <Link href="/admin/stock-list">
                <p className="flex items-center gap-1 text-sm font-medium capitalize">
                  view all
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </p>
              </Link>
            </div>
          </div>
          {/*  stock table */}
          <div className="relative overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
              <thead className="border-b bg-transparent text-center text-xs uppercase text-gray-900 backdrop-blur">
                <tr>
                  <th scope="col" className="px-2 py-3">
                    product Image
                  </th>
                  <th scope="col" className="text-nowrap px-2 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-2 py-3">
                    quantity
                  </th>
                  <th scope="col" className="px-2 py-3">
                    selling Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {stocks?.data?.map((item) => (
                  <tr
                    className="border-b bg-transparent text-center hover:bg-primary/50 hover:text-text"
                    key={item?._id}
                  >
                    <td className="flex items-center justify-center px-2 py-3">
                      <Image
                        className="h-8 w-8 rounded-full ring-1"
                        width={100}
                        height={100}
                        src="/default.jpg"
                        alt="Jese image"
                      />
                    </td>
                    <td className="px-2 py-3 font-medium capitalize text-gray-900">
                      {item?.name?.substr(0, 20)}
                    </td>
                    <td className="px-2 py-3 font-medium text-black">
                      {item?.quantity} - {item?.uom}
                    </td>
                    <td className="px-2 py-3 text-black">
                      {item?.sellingPrice} Tk.
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {stocks?.data?.length === 0 && (
              <p className="py-3 text-center text-sm">No Stock Found!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
