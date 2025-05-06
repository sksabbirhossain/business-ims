/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import DetailsModal from "./DetailsModal";

const SupplierItems = ({ suppliers }) => {
  const [detailsModal, setDetailsModal] = useState(false);
  const [detailsData, setDetailsData] = useState({});

  const { data: session } = useSession();

  const router = useRouter();

  //open details modal
  const openDetailsModal = (details) => {
    setDetailsModal((prev) => !prev);
    setDetailsData(details);
  };

  //delete supplier
  const handleDelete = async (id) => {
    const agree = confirm("Are you sure you wanna delete this?");
    if (agree) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/delete-supplier/${id}`,
        {
          headers: {
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          method: "DELETE",
        },
      );
      const data = await res.json();

      if (data?.data?._id) {
        toast.success("Supplier Deleted Successfull!");
        router.refresh("/admin/supplier-list");
      } else {
        toast.error("Something went wrong. Try again!");
      }
    }
  };

  return (
    <div>
      <div className="table-container relative overflow-x-auto rounded-md shadow-sm shadow-primary">
        <table className="w-full text-left text-sm text-text/80 rtl:text-right">
          <thead className="bg-primary/25 text-xs uppercase text-text">
            <tr>
              <th scope="col" className="px-2 py-4">
                supplier image
              </th>
              <th scope="col" className="px-2 py-4">
                supplier name
              </th>{" "}
              <th scope="col" className="px-2 py-4">
                shop name
              </th>
              <th scope="col" className="px-2 py-4">
                Supplier Number
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* supplier data  */}
            {suppliers?.data?.map((supplier) => (
              <>
                <tr
                  className="border-b odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10"
                  key={supplier?._id}
                >
                  <td className="px-2 py-1">
                    <Image
                      src={supplier?.picture || "/default.jpg"}
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
                    {supplier?.name}
                  </th>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-2 py-4 font-medium text-gray-900"
                  >
                    {supplier?.shopName || "N/A"}
                  </th>
                  <td className="px-2 py-1">{supplier?.phone}</td>
                  <td className="px-2 py-1">
                    <span className="flex w-full items-center justify-center gap-2">
                      <button onClick={() => openDetailsModal(supplier)}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 text-pink-500 hover:text-pink-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </span>
                      </button>
                      <Link href={`/admin/supplier-update/${supplier?._id}`}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 text-green-800 hover:text-green-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </span>
                      </Link>
                      <button onClick={() => handleDelete(supplier?._id)}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 text-red-500 hover:text-red-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </span>
                      </button>
                    </span>
                  </td>
                </tr>
              </>
            ))}

            {suppliers?.data?.length === 0 && (
              <p className="py-5 text-center font-semibold capitalize">
                No supplier found!
              </p>
            )}
          </tbody>
        </table>
      </div>
      {/* details modal */}
      {detailsModal && (
        <DetailsModal
          setDetailsModal={setDetailsModal}
          detailsData={detailsData}
        />
      )}
    </div>
  );
};

export default SupplierItems;
