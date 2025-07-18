/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */
"use client";

import { useEffect, useRef, useState } from "react";

const NotificationSection = () => {
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
  const messages = false; // This should be replaced with actual message data
  return (
    <div className="relative cursor-pointer">
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
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
          />
        </svg>
      </p>
      {/* notification container */}
      <div
        className={`absolute -right-[100px] top-10 z-50 h-[400px] w-[350px] overflow-hidden rounded-lg bg-secondary/95 shadow-sm shadow-primary backdrop-blur transition-all duration-500 ease-linear ${isOpen ? "block" : "hidden"}`}
        ref={containerRef}
      >
        <div className="h-full w-full">
          {messages ? (
            <div>
              <ul>
                <li>notification</li>
              </ul>
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"
                  />
                </svg>

                <p className="text-center text-[15px] font-normal">
                  No notification available!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationSection;
