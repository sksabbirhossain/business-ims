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
    <div className="space-y-3 rounded-md bg-white px-2 py-5 shadow">
      <div className="w-full space-y-2">
        <p className="text-[15px] font-semibold capitalize">search products</p>
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
  );
};

export default AddSalesContainer;
