/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";
import { createReturnSale } from "@/actions/storeAdmin/returnSale/returnSaleActions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const SearchItem = ({ item, customer, trxid }) => {
  const [qty, setQty] = useState(item.qty);
  const router = useRouter();

  //handle return sale
  const handleReturnSale = async () => {
    const data = {
      trxid,
      product: item.product?._id,
      qty,
      price: item?.price,
    };
    const results = await createReturnSale(data);
    if (results?.data?._id) {
      toast.success(results?.message);
      router.refresh();
    } else {
      toast.error("Please try again something went wrong!");
    }
  };

  return (
    <tr className="border-b text-center odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10">
      <td className="flex w-full items-center justify-center px-1 py-2">
        <Image
          src={"/default.jpg"}
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
        {item?.product?.name?.substr(0, 20)}...
      </th>
      <td className="whitespace-nowrap px-1 py-2"> {customer?.name} </td>
      <td className="text-nowrap px-1 py-2">
        <p className="flex w-full items-center justify-center gap-2">
          <input
            className="w-[100px] rounded-[3px] border border-primary text-center focus:outline-none"
            type="number"
            min={0}
            max={item?.qty}
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          - <span>{item?.product?.uom}</span>
        </p>
      </td>
      <td className="px-1 py-2"> {item?.price} Tk. </td>
      <td className="px-1 py-2" onClick={handleReturnSale}>
        <button className="text-primary hover:text-primary/80">Return</button>
      </td>
    </tr>
  );
};

export default SearchItem;
