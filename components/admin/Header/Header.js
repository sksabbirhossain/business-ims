/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import defaultLogo from "@/public/images/defaultLogo.png";
import { auth } from "@/utils/authOptions";
import Image from "next/image";
import Link from "next/link";
import MessageSection from "./MessageSection";
import NotificationSection from "./NotificationSection";
import OpenSidebarButton from "./OpenSidebarButton";
import SettingsSection from "./SettingsSection";
import UserInfoSection from "./UserInfoSection";

const Header = async () => {
  const session = await auth();
  const userInfo = session?.user || null;

  return (
    <div className="fixed top-0 z-50 flex h-[45px] w-full items-center bg-white/50 px-2 shadow-sm shadow-gray-300 backdrop-blur sm:px-4">
      <div className="flex h-full w-full items-center justify-between gap-2">
        {/* show info */}
        <Link href="/admin/dashboard">
          <div className="flex cursor-pointer select-none items-center gap-2">
            <Image
              src={userInfo?.picture ? userInfo?.picture : defaultLogo}
              alt="store logo"
              width={100}
              height={100}
              className="h-[35px] w-[35px] rounded-full object-cover ring-1 ring-secondary"
            />
            <h1 className="hidden text-nowrap text-lg font-semibold uppercase sm:block">
              {userInfo?.storeName.substr(0, 12)}
            </h1>
          </div>
        </Link>
        {/* searchbar */}
        <form action="" className="hidden md:block">
          <div className="group flex w-full items-center rounded-lg border-2 focus-within:border-primary">
            <input
              type="search"
              placeholder="Search by categories..."
              className="w-full max-w-[500px] rounded-lg bg-transparent px-2 py-1 focus:outline-none"
            />
            <button className="pe-2 hover:text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </form>
        {/* left info */}
        <div className="flex items-center gap-x-2 md:gap-x-4">
          {/* notification section */}
          <NotificationSection />
          {/* message section */}
          <MessageSection />
          {/* settings section */}
          <SettingsSection />
          {/* if user is logged in, show user info */}
          {userInfo?._id && <UserInfoSection userInfo={userInfo} />}
          {/* mobile open menu */}
          <OpenSidebarButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
