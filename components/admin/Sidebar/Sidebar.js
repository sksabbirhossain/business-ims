/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";

import useMobileMenu from "@/contexts/mobileMenuContext";
import sidebarRoutes from "@/utils/admin/sidebarRoutes";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import MenuItems from "./MenuItems";

const Sidebar = () => {
  const { menuOpen, mobileMenuHandler } = useMobileMenu();
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);

  const router = useRouter();
  //user signout handler
  const signOutHandler = async () => {
    await signOut({ redirect: false, callbackUrl: "/superadmin/login" });
    router.push("/");
    toast.success("Logout successful!");
  };

  return (
    <div>
      {menuOpen && (
        <div
          className="fixed top-[45px] z-30 block h-screen w-full bg-black/50 sm:hidden"
          onClick={mobileMenuHandler}
        />
      )}
      <aside
        className={`fixed left-0 top-[45px] z-40 h-screen w-52 -translate-x-full bg-[url('/sidebar-bg.jpg')] pb-[45px] transition-transform sm:translate-x-0 ${menuOpen ? "translate-x-0" : ""}`}
      >
        <div className="sidebar-scrollbar-customize h-full overflow-y-auto bg-white/80 py-2 shadow-sm shadow-gray-400 backdrop-blur">
          <ul className="select-none space-y-1 text-[15px] font-medium">
            {sidebarRoutes?.map((item, i) => (
              <MenuItems
                key={i}
                item={item}
                index={i}
                activeDropdownIndex={activeDropdownIndex}
                setActiveDropdownIndex={setActiveDropdownIndex}
              />
            ))}

            {/* logout button */}
            <li onClick={signOutHandler}>
              <button
                className={`group flex w-full items-center rounded-sm p-2 px-3 capitalize text-text hover:bg-secondary hover:text-white`}
              >
                <span className="h-5 w-5 text-text/50 transition duration-75 group-hover:text-green-700">
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
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                  </svg>
                </span>
                <span className="ms-2">log out</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
