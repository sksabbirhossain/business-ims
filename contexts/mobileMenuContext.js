/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";
import { createContext, useContext, useState } from "react";

export const MobileMenuContext = createContext();

export default function useMobileMenu() {
  return useContext(MobileMenuContext);
}

export function MobileMenuProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  //toggle mobile menu handler
  const mobileMenuHandler = () => {
    return setMenuOpen(!menuOpen);
  };

  const info = {
    menuOpen,
    mobileMenuHandler,
  };

  return (
    <MobileMenuContext.Provider value={info}>
      {children}
    </MobileMenuContext.Provider>
  );
}
