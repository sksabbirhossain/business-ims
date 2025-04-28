/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import Image from "next/image";
import React from "react";
import ActionButtons from "./ActionButtons";

const CustomerItem = ({ customer }) => {
  return (
    <tr className="border-b text-center text-nowrap odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10">
      <td className="flex h-full w-full justify-center px-2 py-2">
        <Image
          src={customer?.picture ? customer.picture : "/default.jpg"}
          alt={customer?.name}
          width={200}
          height={200}
          className="h-[35px] w-[35px] rounded-full object-cover ring-1 ring-primary"
        />
      </td>
      <th
        scope="row"
        className="whitespace-nowrap px-2 py-4 font-medium text-gray-900"
      >
        {customer?.name}
      </th>
      <td className="px-2 py-1">{customer?.email}</td>
      <td className="px-2 py-1">{customer?.phone}</td>
      <td className="px-2 py-1">{customer?.address}</td>
      <td className="px-2 py-1">
        {/* action buttons */}
        <ActionButtons id={customer?._id} />
      </td>
    </tr>
  );
};

export default CustomerItem;
