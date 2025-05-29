/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { AddToCartProvider } from "@/contexts/addToCartContext";
import { MobileMenuProvider } from "@/contexts/mobileMenuContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SessionProviders from "./SessionProviders";

const LayoutWrapper = ({ children }) => {
  return (
    <AddToCartProvider>
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
    </AddToCartProvider>
  );
};

export default LayoutWrapper;
