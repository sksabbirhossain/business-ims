/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getFinance } from "@/actions/storeAdmin/dashboard/dashboardActions";
import Link from "next/link";

const TopSection = async () => {
  //get all financial informations
  const data = await getFinance();
  const finance = data?.data;

  return (
    <div>
      {data?.status === 403 && (
        <p className="mb-3 w-full rounded-sm bg-red-500 py-3 text-center text-[15px] font-medium text-gray-100">
          {data?.errors?.common?.msg}{" "}
          <Link href="/admin/subscription">
            <span className="capitalize text-green-400 hover:underline">
              click to renew here.
            </span>
          </Link>
        </p>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex h-24 cursor-pointer items-center justify-center gap-x-4 rounded bg-white/50 shadow-md backdrop-blur hover:bg-primary/50 hover:text-text">
          <div className="rounded-full bg-red-400/50 p-2 ring-2 ring-red-400/60">
            {/* icons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
            </svg>
          </div>
          <div className="leading-6">
            <h1 className="flex items-center text-xl font-semibold">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="h-5 w-5"
                >
                  <text
                    x="0"
                    y="20"
                    fontSize="24"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    ৳
                  </text>
                </svg>
              </span>
              {finance?.totalPurchaseCost} Tk.
            </h1>
            <p className="text-[14px] font-medium uppercase">total purchase</p>
          </div>
        </div>

        <div className="flex h-24 cursor-pointer items-center justify-center gap-x-4 rounded bg-white/50 shadow-md backdrop-blur hover:bg-primary/50 hover:text-text">
          <div className="rounded-full bg-green-100 p-2 ring-2 ring-green-200">
            {/* icons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-green-950"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="leading-6">
            <h1 className="flex items-center text-xl font-semibold">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="h-5 w-5"
                >
                  <text
                    x="0"
                    y="20"
                    fontSize="24"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    ৳
                  </text>
                </svg>
              </span>
              {finance?.totalSalesRevenue} Tk.
            </h1>
            <p className="text-[14px] font-medium uppercase">total sales</p>
          </div>
        </div>
        <div className="flex h-24 cursor-pointer items-center justify-center gap-x-4 rounded bg-white/50 shadow-md backdrop-blur hover:bg-primary/50 hover:text-text">
          <div className="rounded-full bg-yellow-100 p-2 ring-2 ring-yellow-200">
            {/* icons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
              />
            </svg>
          </div>
          <div className="leading-6">
            <h1 className="flex items-center text-xl font-semibold">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="h-5 w-5"
                >
                  <text
                    x="0"
                    y="20"
                    fontSize="24"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    ৳
                  </text>
                </svg>
              </span>
              {finance?.totalProfit} Tk.
            </h1>
            <p className="text-[14px] font-medium uppercase">total profit</p>
          </div>
        </div>
        <div className="flex h-24 cursor-pointer items-center justify-center gap-x-4 rounded bg-white/50 shadow-md backdrop-blur hover:bg-primary/50 hover:text-text">
          <div className="rounded-full bg-red-100 p-2 ring-2 ring-red-300">
            {/* icons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-red-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              />
            </svg>
          </div>
          <div className="leading-6">
            <h1 className="flex items-center text-xl font-semibold">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="h-5 w-5"
                >
                  <text
                    x="0"
                    y="20"
                    fontSize="24"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    ৳
                  </text>
                </svg>
              </span>
              {finance?.totalDue} Tk.
            </h1>
            <p className="text-[14px] font-medium uppercase">total due</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
