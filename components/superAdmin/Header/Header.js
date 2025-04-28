/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import defaultImage from "@/public/default.jpg";
import { auth } from "@/utils/authOptions";
import Image from "next/image";
import LogoutButton from "../../common/Header/LogoutButton";
import OpenSidebarButton from "./OpenSidebarButton";

const Header = async () => {
  const session = await auth();
  const userInfo = session?.user || null;

  return (
    <div className="fixed top-0 z-50 flex h-[45px] w-full items-center bg-white/70 px-2 shadow-sm shadow-gray-300 backdrop-blur sm:px-4">
      <div className="flex h-full w-full items-center justify-between gap-2">
        {/* show info */}
        <div className="">
          <h1 className="text-nowrap text-lg font-semibold capitalize">
            Demo shop
          </h1>
        </div>
        {/* searchbar */}
        <form action="" className="hidden md:block">
          <div className="group flex w-full items-center rounded-lg border-2 focus-within:border-primary">
            <input
              type="search"
              placeholder="Search by categories..."
              className="w-full max-w-[500px] rounded-lg px-2 py-1 focus:outline-none"
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
          <p className="group cursor-pointer rounded-lg border-2 border-gray-300 p-1 hover:border-primary hover:bg-green-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 group-hover:text-green-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
          </p>
          <p className="group cursor-pointer rounded-lg border-2 border-gray-300 p-1 hover:border-primary hover:bg-green-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 group-hover:text-green-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </p>
          <p className="group cursor-pointer rounded-lg border-2 border-gray-300 p-1 hover:border-primary hover:bg-green-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 group-hover:text-green-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </p>
          {userInfo?._id && (
            <div className="group relative flex cursor-pointer select-none items-center gap-x-2">
              <div className="h-8 w-8">
                <Image
                  src={userInfo?.picture || defaultImage}
                  alt="default profile picture"
                  width={100}
                  height={100}
                  className="rounded-full ring-2 ring-gray-300 group-hover:ring-green-600"
                />
              </div>
              <p className="hidden flex-col leading-4 md:flex">
                <span className="text-nowrap text-[14px] font-semibold uppercase">
                  {userInfo?.name}
                </span>
                <span className="text-[14px] font-normal capitalize">
                  {userInfo?.role}
                </span>
              </p>

              {/* logout button */}
              <div className="absolute right-0 top-9 hidden group-hover:block">
                <LogoutButton link={"/superadmin/profile"} />
              </div>
            </div>
          )}
          {/* mobile open menu */}
          <OpenSidebarButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
