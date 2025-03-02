import Image from "next/image";
import React from "react";

const CartItem = ({ item }) => {
  return (
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
        <p className="text-[15px] font-semibold">
          {item.name.substr(0, 20)}...
        </p>
      </div>
      <div className="">
        <p className="text-[14px] font-semibold capitalize text-primary">Qty</p>
        <p className="text-[15px] font-normal">{item.qty}</p>
      </div>
      <div className="">
        <p className="text-[14px] font-semibold capitalize text-primary">
          price
        </p>
        <p className="text-[15px] font-normal">{item.sellingPrice} Taka </p>
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
        <p className="text-[15px] font-normal">
          {item.sellingPrice * item.qty} Taka
        </p>
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
  );
};

export default CartItem;
