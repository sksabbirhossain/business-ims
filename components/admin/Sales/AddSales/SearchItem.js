import Image from "next/image";
import React, { useState } from "react";

const SearchItem = ({ product }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex h-full w-full flex-wrap items-center gap-x-4 border-b pb-2 sm:justify-between">
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
        <p className="text-[15px] font-semibold">
          {product?.name.substr(0, 20)}...
        </p>
      </div>
      <div className="">
        <p className="text-[14px] font-semibold capitalize text-primary">Qty</p>
        <p className="flex w-full items-center justify-between gap-x-1">
          <span>
            <button
              disabled={qty === 1}
              className="rounded bg-primary px-1 text-lg font-bold text-white disabled:opacity-50"
              onClick={() => setQty((prv) => prv - 1)}
            >
              {" "}
              -{" "}
            </button>
          </span>
          <input
            type="text"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="w-full max-w-[60px] rounded-md border-2 border-primary px-2 text-center focus:outline-none"
          />
          <span>
            <button
              disabled={qty == product?.quantity}
              className="rounded bg-primary px-1 text-lg font-bold text-white disabled:opacity-50"
              onClick={() => setQty((prv) => prv + 1)}
            >
              {" "}
              +{" "}
            </button>
          </span>
        </p>
      </div>
      <div className="">
        <p className="text-[14px] font-semibold capitalize text-primary">
          price
        </p>
        <p className="text-[15px] font-semibold">
          {product?.sellingPrice} Taka
        </p>
      </div>
      <div>
        <p className="rounded bg-primary px-1 py-1 text-[12px] font-medium capitalize text-white">
          Add to Cart
        </p>
      </div>
    </div>
  );
};

export default SearchItem;
