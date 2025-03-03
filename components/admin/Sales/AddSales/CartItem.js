import useAddToCart from "@/contexts/addToCartContext";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const { removeFromCart } = useAddToCart();

  //remove from cart handler
  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    toast.info("Product removed from cart");
  };
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-between gap-3 border-b pb-2">
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
          Total
        </p>
        <p className="text-[15px] font-normal">{item.total} Taka</p>
      </div>
      <div>
        <p
          className="cursor-pointer select-none rounded bg-red-500 text-[12px] font-medium capitalize text-white"
          onClick={() => handleRemoveFromCart(item._id)}
        >
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
