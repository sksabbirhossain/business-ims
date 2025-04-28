/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import ActionButtons from "./ActionButtons";

const ReturnSaleItem = ({ sale }) => {
  return (
    <tr className="border-b text-center odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10">
      <td className="flex justify-center px-2 py-1">
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
        {sale?.product?.name?.substr(0.2) || "N/A"}
      </th>
      <td className="px-2 py-1">{sale?.sales?.customer?.name || "N/A"}</td>
      <td className="px-2 py-1">{sale?.qty}</td>
      <td className="px-2 py-1">{sale?.price * sale?.qty || 0} Tk.</td>
      <td className="px-2 py-1">{sale?.trxid}</td>
      <td className="px-2 py-1">
        {format(new Date(sale?.returnedAt), "dd MMM yyyy")}
      </td>
      <td className="px-2 py-1">
        <ActionButtons id={sale?._id} />
      </td>
    </tr>
  );
};

export default ReturnSaleItem;
