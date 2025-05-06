/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";
import { getSalesByTrxId } from "@/actions/storeAdmin/sales/salesActions";
import Button from "@/components/common/Button/Button";
import FormInput from "@/components/common/FormInput/FormInput";
import Image from "next/image";
import React, { useState } from "react";
import SearchItem from "./SearchItem";

const SearchContainer = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchSalesHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSearchResults([]);
    try {
      const data = await getSalesByTrxId(query);
      if (data?.errors) {
        setError(data);
        setLoading(false);
        return;
      }
      setSearchResults(data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  console.log(searchResults);

  return (
    <>
      <div className="">
        <div className="flex w-full justify-end">
          <form onSubmit={searchSalesHandler}>
            <div className="flex w-full items-center gap-2">
              <FormInput
                placeholder="search sales by trxId..."
                label={0}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button isPending={loading} disabled={query === ""}>
                Search
              </Button>
            </div>
          </form>
        </div>
        {error?.errors && (
          <div className="flex w-full justify-end pt-2">
            <p className="rounded p-2 text-end font-medium text-red-500">
              {error?.errors?.common?.msg}
            </p>
          </div>
        )}
      </div>

      {/* search results */}
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
                Price
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {searchResults?.data?.cart?.map((item) => (
              <SearchItem
                key={item._id}
                item={item}
                customer={searchResults?.data?.customer}
                trxid={searchResults?.data?.trxid}
                // price={}
              />
            ))}
          </tbody>
        </table>

        {loading && (
          <div className="flex w-full justify-center py-3">
            <p className="text-center font-medium text-primary">Loading...</p>
          </div>
        )}
        {searchResults?.data?.length === 0 && !loading && (
          <div className="flex w-full justify-center py-3">
            <p className="text-center font-medium text-primary">
              No results found!
            </p>
          </div>
        )}
        {searchResults?.data?.cart?.length === 0 && !loading && (
          <div className="flex w-full justify-center py-3">
            <p className="text-center font-medium text-primary">
              Cart is empty. please search on return sales list by this
              Transaction ID.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchContainer;
