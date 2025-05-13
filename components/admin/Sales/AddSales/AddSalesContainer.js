/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";

import { searchStock } from "@/actions/storeAdmin/stock/stockActions";
import Button from "@/components/common/Button/Button";
import FormInput from "@/components/common/FormInput/FormInput";
import React, { useState } from "react";
import { toast } from "react-toastify";
import SearchItem from "./SearchItem";

const AddSalesContainer = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  //handle product search
  const handleSearchProduct = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErrors({});
      const result = await searchStock(query);

      //if data found
      if (result.data?.length > 0) {
        setProducts(result.data);
      } else if (result.data?.length === 0) {
        setProducts([]);
        setErrors({
          errors: {
            common: {
              msg: "No product found!",
            },
          },
        });
      }
      //if any errors
      if (result.errors) {
        setErrors(result);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrors({
        errors: {
          common: {
            msg: err.message,
          },
        },
      });
    }
  };

  return (
    <div className="rounded-md bg-white py-5">
      <div className="w-full space-y-2 pb-2 shadow">
        <p className="px-2 text-[15px] font-semibold uppercase">
          search products
        </p>
        <form onSubmit={handleSearchProduct}>
          <div className="flex w-full items-center gap-3 px-2">
            <FormInput
              type="text"
              label={0}
              name="search"
              placeholder="search products from store..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              type="submit"
              isPending={loading}
              disabled={query === ""}
              className="disabled:opacity-90"
            >
              Search
            </Button>
          </div>
        </form>
      </div>
      {/* search items */}
      <div className="sales-container-scroll h-full max-h-[250px] overflow-x-auto pt-3">
        <div className="space-y-3 pe-2 ps-1">
          {/* showing search products */}
          {products.map((product) => (
            <SearchItem key={product._id} product={product} />
          ))}
        </div>

        {/* showing errors message */}
        <div>
          {products?.length === 0 && (
            <p className="pt-2 text-center text-sm font-medium capitalize text-gray-700">
              Search list are empty!
            </p>
          )}
          {errors?.errors?.common && (
            <p className="pt-2 text-center text-sm font-medium capitalize text-primary">
              {errors?.errors?.common?.msg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddSalesContainer;
