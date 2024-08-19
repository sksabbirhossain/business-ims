import PurchaseSaleSection from "@/components/Dashboard/PurchaseSaleSection";
import TopSection from "@/components/Dashboard/TopSection";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <TopSection />
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {/* purchase and sales */}
        <div className="col-span-1 rounded bg-white p-4 shadow-sm shadow-green-400 lg:col-span-2">
          <PurchaseSaleSection />
        </div>

        <div className="col-span-1 space-y-4 rounded bg-white p-4 shadow-sm shadow-green-400">
          <div className="flex flex-wrap items-center justify-between lg:flex-nowrap">
            <div>
              <h3 className="text-lg font-semibold capitalize">
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
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white hover:bg-green-100">
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
                  <td className="px-2 py-3 text-black">1293</td>
                </tr>
                <tr className="border-b bg-white hover:bg-green-100">
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
                  <td className="px-2 py-3 text-black">1293</td>
                </tr>
                <tr className="border-b bg-white hover:bg-green-100">
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
                  <td className="px-2 py-3 text-black">1293</td>
                </tr>
                <tr className="border-b bg-white hover:bg-green-100">
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
                  <td className="px-2 py-3 text-black">1293</td>
                </tr>
                <tr className="border-b bg-white hover:bg-green-100">
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
                  <td className="px-2 py-3 text-black">1293</td>
                </tr>
                <tr className="border-b bg-white hover:bg-green-100">
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
