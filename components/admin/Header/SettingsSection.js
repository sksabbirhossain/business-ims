/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SettingsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);

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
        setActive(false);
      }
    };

    // Listen for clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // handle click
  const handleclick = () => {
    setIsOpen(!isOpen);
    setActive(!active);
  };

  return (
    <div className="group relative cursor-pointer">
      <p
        className={`group cursor-pointer rounded-lg border-2 border-gray-300 p-1 transition-all duration-200 ease-linear hover:border-primary hover:bg-secondary ${active ? "border-primary bg-secondary text-gray-200" : ""}`}
        ref={iconRef}
        onClick={handleclick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 group-hover:text-gray-200"
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
      {/* settings container */}
      <div
        className={`h-min-[200px] absolute -right-[100px] top-10 z-50 w-[250px] overflow-hidden rounded-lg bg-secondary/95 shadow-sm shadow-primary backdrop-blur transition-all duration-500 ease-linear ${isOpen ? "block" : "hidden"}`}
        ref={containerRef}
      >
        <div className="font-semibold text-gray-800">
          <ul>
            <li
              className="list-item border-b border-primary px-4 py-3 text-[15px] font-medium uppercase hover:bg-primary/60"
              onClick={handleclick}
            >
              <Link href="/admin/subscription">subscription</Link>
            </li>
            <li
              className="list-item border-b border-primary px-4 py-3 text-[15px] font-medium uppercase hover:bg-primary/60"
              onClick={handleclick}
            >
              <Link href="/admin/security">security</Link>
            </li>
            <li
              className="list-item border-b border-primary px-4 py-3 text-[15px] font-medium uppercase hover:bg-primary/60"
              onClick={handleclick}
            >
              <Link href="/admin/profile">Personal info</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
