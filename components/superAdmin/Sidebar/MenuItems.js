"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MenuItems = ({ item }) => {
  const pathName = usePathname();
  const [dropDown, setDropDown] = useState(false);

  //dropdown menu open
  const handleDropDownMenu = () => {
    setDropDown((prv) => !prv);
  };

  return item?.menu?.length >= 0 ? (
    <li
      className={`cursor-pointer capitalize hover:border-l-4 hover:border-green-700 ${dropDown ? "border-l-4 border-green-700 bg-secondary/50" : ""}`}
    >
      <div
        onClick={() => handleDropDownMenu()}
        className="flex items-center justify-between text-text hover:bg-secondary hover:text-white"
      >
        <p className={`group flex items-center rounded-sm p-2 px-3`}>
          <span className="h-5 w-5 text-text/50 transition duration-75 group-hover:text-green-700">
            {item?.icon}
          </span>
          <span className={`${dropDown ? "text-text/90" : ""} ms-2`}>
            {item?.name}
          </span>
        </p>
        <span className="pe-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </span>
      </div>

      {/* dropdown menu */}
      {item?.menu?.length >= 0 && (
        <ul className={`${dropDown ? "" : "hidden"} `}>
          {item.menu.map((item, i) => (
            <li key={i} className="border-t-[1px] border-white/30">
              <Link
                href={item?.path}
                className={`group flex items-center rounded-sm px-5 py-2 text-text/90 before:absolute before:left-9 before:h-2 before:w-2 before:rounded-full hover:bg-primary hover:text-white ${pathName === item?.path ? "active-menu before:bg-white" : "before:bg-green-900"}`}
              >
                <span className={`ms-7`}>{item?.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ) : (
    <li className="capitalize">
      <div>
        <Link
          href={item?.path}
          className={`group flex items-center rounded-sm p-2 px-3 text-text hover:bg-secondary hover:text-white ${pathName === item?.path ? "active" : ""}`}
        >
          <span className="h-5 w-5 text-text/50 transition duration-75 group-hover:text-green-700">
            {item?.icon}
          </span>
          <span className="ms-2">{item?.name}</span>
        </Link>
      </div>
    </li>
  );
};

export default MenuItems;
