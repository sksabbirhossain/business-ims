/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import Image from "next/image";
import ActionButtons from "./ActionButtons";

const CategoryItem = ({ category }) => {
  return (
    <tr className="border-b odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10">
      <td className="px-2 py-1">
        <Image
          src={category?.picture ? category.picture : "/default.jpg"}
          alt={category?.name}
          width={200}
          height={200}
          className="h-[35px] w-[35px] rounded-full object-cover ring-1 ring-primary"
        />
      </td>
      <th
        scope="row"
        className="whitespace-nowrap px-2 py-4 font-medium text-gray-900"
      >
        {category?.name}
      </th>
      <td className="px-2 py-1">{category?.description.substr(0, 50)}</td>
      <td className="px-2 py-1">
        {/* action buttons */}
        <ActionButtons id={category?._id} />
      </td>
    </tr>
  );
};

export default CategoryItem;
