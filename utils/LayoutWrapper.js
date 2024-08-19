"use client";

import { MobileMenuProvider } from "@/contexts/mobileMenuContext";
import { Toaster } from "react-hot-toast";

const LayoutWrapper = ({ children }) => {
  return (
    <MobileMenuProvider>
      <Toaster position="top-right" />
      {children}
    </MobileMenuProvider>
  );
};

export default LayoutWrapper;
