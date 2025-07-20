/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */
"use client";

import { useEffect, useRef, useState } from "react";

const MessageSection = () => {
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
        onClick={handleclick}
        ref={containerRef}
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
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </p>
      {/* message container */}
      <div
        className={`absolute -right-[100px] top-10 z-50 h-[400px] w-[350px] overflow-hidden rounded-lg bg-secondary/95 shadow-sm shadow-primary backdrop-blur transition-all duration-500 ease-linear ${isOpen ? "block" : "hidden"}`}
        ref={iconRef}
      >
        <div className="h-full w-full">
          {messages ? (
            <div>
              <ul>
                <li>message item</li>
              </ul>
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-2 text-gray-800">
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
                    d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                  />
                </svg>

                <p className="text-center text-[15px] font-medium capitalize">
                  No messages available!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
