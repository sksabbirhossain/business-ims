"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const MenuItems = ({ item }) => {
  const pathName = usePathname();

  return (
    <li>
      <Link
        href={item?.path}
        className={`group flex items-center rounded-sm p-2 px-3 text-gray-900 hover:border-l-4 hover:border-green-700 hover:bg-green-100 hover:text-black ${pathName === item?.path ? "active" : ""}`}
      >
        <span className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-green-700">
          {item?.icon}
        </span>
        <span className="ms-2">{item?.name}</span>
      </Link>
    </li>
  );
};

export default MenuItems;
