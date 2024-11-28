"use client";

import { MobileMenuProvider } from "@/contexts/mobileMenuContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SessionProviders from "./SessionProviders";

const LayoutWrapper = ({ children }) => {
  return (
    <SessionProviders>
      <MobileMenuProvider>
        <ToastContainer
          autoClose={3000}
          hideProgressBar={true}
          theme="colored"
        />
        {children}
      </MobileMenuProvider>
    </SessionProviders>
  );
};

export default LayoutWrapper;
