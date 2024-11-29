import DailyBuySaleSection from "@/components/admin/Dashboard/DailyBuySaleSection";
import PurchaseSaleSection from "@/components/admin/Dashboard/PurchaseSaleSection";
import TopSection from "@/components/admin/Dashboard/TopSection";
import { auth } from "@/utils/authOptions";
import Link from "next/link";

const Dashboard = async () => {
  return (
    <div className="relative z-10 space-y-4 md:space-y-6">
      <div className="absolute right-1 top-2 -z-10 h-[300px] w-[200px] max-w-full bg-gradient-to-r from-primary to-secondary blur-[99px]" />
      <TopSection />
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {/* purchase and sales */}
        <div className="col-span-1 rounded bg-white p-4 shadow-sm shadow-primary lg:col-span-2">
          <PurchaseSaleSection />
        </div>

        {/* recently added categories */}
        <div className="col-span-1 space-y-4 rounded bg-white p-4 shadow-sm shadow-primary">
          <div className="flex flex-wrap items-center justify-between lg:flex-nowrap">
            <div>
              <h3 className="text-lg font-semibold capitalize leading-5">
                recently added categories
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
              <Link href="#">
                <p className="flex items-center gap-1 text-nowrap text-sm font-medium capitalize">
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

          {/* new products table */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
              <thead className="bg-gray-100 text-xs uppercase text-gray-900">
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
                <tr className="border-b bg-white hover:bg-primary hover:text-text">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    1
                  </th>
                  <td
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    Apple Mobile
                  </td>
                  <td className="flex items-center px-2 py-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                  </td>
                </tr>
                <tr className="border-b bg-white hover:bg-primary hover:text-text">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    1
                  </th>
                  <td
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    Apple Mobile
                  </td>
                  <td className="flex items-center px-2 py-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                  </td>
                </tr>
                <tr className="border-b bg-white hover:bg-primary hover:text-text">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    1
                  </th>
                  <td
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    Apple Mobile
                  </td>
                  <td className="flex items-center px-2 py-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                  </td>
                </tr>
                <tr className="border-b bg-white hover:bg-primary hover:text-text">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    1
                  </th>
                  <td
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    Apple Mobile
                  </td>
                  <td className="flex items-center px-2 py-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                  </td>
                </tr>
                <tr className="border-b bg-white hover:bg-primary hover:text-text">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    1
                  </th>
                  <td
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    Apple Mobile
                  </td>
                  <td className="flex items-center px-2 py-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                  </td>
                </tr>
                <tr className="border-b bg-white hover:bg-primary hover:text-text">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    1
                  </th>
                  <td
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    Apple Mobile
                  </td>
                  <td className="flex items-center px-2 py-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {/* daily buy and sales */}
        <div className="col-span-1 rounded bg-white p-4 shadow-sm shadow-primary">
          <DailyBuySaleSection />
        </div>

        {/* recently added products */}
        <div className="col-span-1 space-y-4 rounded bg-white p-4 shadow-sm shadow-primary lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between lg:flex-nowrap">
            <div>
              <h3 className="text-lg font-semibold capitalize leading-5">
                recently added products
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
              <Link href="#">
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
          {/* new products table */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
              <thead className="bg-gray-100 text-xs uppercase text-gray-900">
                <tr>
                  <th scope="col" className="px-2 py-3">
                    No.
                  </th>
                  <th scope="col" className="text-nowrap px-2 py-3">
                    Products
                  </th>
                  <th scope="col" className="px-2 py-3">
                    unit
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white hover:bg-primary hover:text-text">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    1
                  </th>
                  <td
                    scope="row"
                    className="flex items-center gap-1 whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                    Apple Mobile
                  </td>
                  <td className="px-2 py-3 font-medium text-black">KG</td>
                  <td className="px-2 py-3 text-black">1293</td>
                </tr>
                <tr className="border-b bg-white hover:bg-primary hover:text-text">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    1
                  </th>
                  <td
                    scope="row"
                    className="flex items-center gap-1 whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                    Apple Mobile
                  </td>
                  <td className="px-2 py-3 font-medium text-black">KG</td>
                  <td className="px-2 py-3 text-black">1293</td>
                </tr>
                <tr className="border-b bg-white hover:bg-primary hover:text-text">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    1
                  </th>
                  <td
                    scope="row"
                    className="flex items-center gap-1 whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                    Apple Mobile
                  </td>
                  <td className="px-2 py-3 font-medium text-black">KG</td>
                  <td className="px-2 py-3 text-black">1293</td>
                </tr>
                <tr className="border-b bg-white hover:bg-primary hover:text-text">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    1
                  </th>
                  <td
                    scope="row"
                    className="flex items-center gap-1 whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                    Apple Mobile
                  </td>
                  <td className="px-2 py-3 font-medium text-black">KG</td>
                  <td className="px-2 py-3 text-black">1293</td>
                </tr>
                <tr className="border-b bg-white hover:bg-primary hover:text-text">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    1
                  </th>
                  <td
                    scope="row"
                    className="flex items-center gap-1 whitespace-nowrap px-2 py-3 font-medium text-gray-900"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    />
                    Apple Mobile
                  </td>
                  <td className="px-2 py-3 font-medium text-black">KG</td>
                  <td className="px-2 py-3 text-black">1293</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
