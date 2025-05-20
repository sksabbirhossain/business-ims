"use client";
import { getDueSalesByNameTrxId } from "@/actions/storeAdmin/sales/salesActions";
import Button from "@/components/common/Button/Button";
import FormInput from "@/components/common/FormInput/FormInput";
import Pagination from "@/components/common/Pagination/Pagination";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import DueListActionButtons from "./DueListActionButtons";

const DueContainer = ({ data }) => {
  const [dueData, setDueData] = useState({});
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  //set Data
  useEffect(() => {
    setErrors({});
    if (query === "") setDueData(data);
  }, [data, query]);

  // handle search due
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setDueData({});
    try {
      const data = await getDueSalesByNameTrxId(query);

      if (data?.data) {
        setLoading(false);
        setDueData(data);
      } else {
        setLoading(false);
        setErrors(data);
      }
      setLoading(false);
    } catch (er) {
      setLoading(false);
      setErrors({
        errors: {
          common: {
            // msg: err.message,
            msg: "Intranal server error!",
          },
        },
      });
    }
  };

  return (
    <>
      <div className="flex h-full w-full justify-end">
        <form onSubmit={handleSubmit}>
          <div className="flex h-full w-full items-center justify-end">
            <FormInput
              label={0}
              type="search"
              value={query}
              name="name"
              className={"w-full sm:max-w-[450px]"}
              placeholder="enter customer name or trxid"
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button isPending={loading} disabled={query === ""}>
              Search
            </Button>
          </div>
        </form>
      </div>

      <div className="table-container relative overflow-x-auto rounded-md shadow-sm shadow-primary">
        <table className="w-full text-left text-sm text-text/80 rtl:text-right">
          <thead className="text-nowrap bg-primary/25 text-center text-xs uppercase text-text">
            <tr>
              <th scope="col" className="px-2 py-4">
                customer name
              </th>
              <th scope="col" className="px-2 py-4">
                total price
              </th>
              <th scope="col" className="px-2 py-4">
                total due
              </th>
              <th scope="col" className="px-2 py-4">
                Transaction id
              </th>
              <th scope="col" className="px-2 py-4">
                last payment date
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dueData?.data?.map((sale) => (
              <tr
                className="text-nowrap border-b text-center odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10"
                key={sale._id}
              >
                <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-900">
                  {sale.customer?.name || "N/A"}
                </td>
                <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-800">
                  {sale?.totalPrice} Tk.
                </td>
                <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-800">
                  {sale?.due} Tk.
                </td>
                <td className="whitespace-nowrap px-2 py-4 font-medium text-gray-800">
                  {sale?.trxid || "N/A"}
                </td>
                <td className="px-2 py-1">
                  {format(sale?.updatedAt, "d MMM yyyy")}
                </td>
                <td className="px-2 py-1">
                  <DueListActionButtons id={sale?._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* showing errors */}
        {dueData?.data && dueData?.data?.length === 0 && (
          <p className="py-4 text-center font-medium text-black/70">
            No due sale found!
          </p>
        )}
        {errors?.errors?.common && (
          <p className="rounded py-2 text-center text-sm font-medium text-red-600">
            {errors?.errors?.common?.msg}
          </p>
        )}
      </div>
      {/* pagination  */}
      <div className="flex w-full justify-end pr-3">
        <Pagination data={dueData} />
      </div>
    </>
  );
};

export default DueContainer;
