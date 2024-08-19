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
