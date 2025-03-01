"use client";

import { searchStock } from "@/actions/storeAdmin/stock/stockActions";
import Button from "@/components/common/Button/Button";
import FormInput from "@/components/common/FormInput/FormInput";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import SearchItem from "./SearchItem";

const AddSalesContainer = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //handle product search
  const handleSearchProduct = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await searchStock(query);

      //if data found
      if (result.data?.length > 0) {
        setProducts(result.data);
      } else if (result.data?.length === 0) {
        setProducts([]);
        toast.info("No product found");
      }
      //if any errors
      if (result.errors) {
        toast.error(result.errors?.common?.msg);
      }

      setLoading(false);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="col-span-2 space-y-5">
      <div className="space-y-3 rounded-md bg-white px-2 py-5 shadow">
        <div className="w-full space-y-2">
          <p className="text-[15px] font-semibold capitalize">
            search products
          </p>
          <form onSubmit={handleSearchProduct}>
            <div className="flex w-full items-center gap-3">
              <FormInput
                type="text"
                label={0}
                name="search"
                placeholder="search products from store..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button isPending={loading}>Search</Button>
            </div>
          </form>
        </div>
        {/* search items */}
        <div className="space-y-3">
          {products.map((product) => (
            <SearchItem key={product._id} product={product} />
          ))}
          {products?.length === 0 && (
            <p className="pt-2 text-center text-sm font-medium capitalize text-gray-700">
              Search list are empty!
            </p>
          )}
        </div>
      </div>

      {/* add to cart items */}
      <div className="space-y-3 rounded-md bg-white px-2 py-3">
        <p className="text-[15px] font-semibold capitalize">cart list</p>
        {/* card items */}
        <div className="flex h-full w-full items-center justify-between border-b pb-2">
          <div className="pt-[1px]">
            <Image
              src="/default.jpg"
              alt="product"
              width={50}
              height={50}
              className="h-[40] w-[40px] rounded-full ring-1 ring-primary"
            />
          </div>
          <div className="">
            <p className="text-[14px] font-semibold capitalize text-primary">
              product name
            </p>
            <p className="text-[15px] font-semibold">iphone 15 pro max</p>
          </div>
          <div className="">
            <p className="text-[14px] font-semibold capitalize text-primary">
              Qty
            </p>
            <p className="text-[15px] font-normal">1</p>
          </div>
          <div className="">
            <p className="text-[14px] font-semibold capitalize text-primary">
              price
            </p>
            <p className="text-[15px] font-normal">100</p>
          </div>
          <div className="">
            <p className="text-[14px] font-semibold capitalize text-primary">
              disc
            </p>
            <input
              type="number"
              value="10"
              className="w-full max-w-[100px] rounded-md border-2 border-primary px-2 focus:outline-none"
            />
          </div>
          <div className="">
            <p className="text-[14px] font-semibold capitalize text-primary">
              Total
            </p>
            <p className="text-[15px] font-normal">100</p>
          </div>
          <div>
            <p className="rounded bg-red-500 text-[12px] font-medium capitalize text-white">
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSalesContainer;
