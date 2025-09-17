/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */
"use client";

import LogoutButton from "@/components/common/Header/LogoutButton";
import defaultImage from "@/public/images/default.jpg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const UserInfoSection = ({ userInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const iconRef = useRef(null);
  const containerRef = useRef(null);

  // hide Message container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Listen for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className="flex cursor-pointer select-none items-center gap-x-2"
        ref={iconRef}
        onClick={() => setIsOpen(!isOpen)}
      >
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
            {userInfo?.ownerName}
          </span>
          <span className="text-[12px] font-medium uppercase text-black/80">
            {userInfo?.role}
          </span>
        </p>
      </div>

      {/* logout button */}
      <div
        className={`absolute right-0 top-10 ${isOpen ? "block" : "hidden"}`}
        ref={containerRef}
      >
        <LogoutButton link={"/admin/profile"} />
      </div>
    </div>
  );
};

export default UserInfoSection;
