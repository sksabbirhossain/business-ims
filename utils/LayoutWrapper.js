"use client";

import { MobileMenuProvider } from "@/contexts/mobileMenuContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LayoutWrapper = ({ children }) => {
  return (
    <MobileMenuProvider>
      <ToastContainer autoClose={3000} hideProgressBar={true} theme="colored" />
      {children}
    </MobileMenuProvider>
  );
};

export default LayoutWrapper;
