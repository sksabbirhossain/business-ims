"use client";

import LoadingComponent from "@/components/common/Loading/LoadingComponent";
import { AddToCartProvider } from "@/contexts/addToCartContext";
import { MobileMenuProvider } from "@/contexts/mobileMenuContext";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SessionProviders from "./SessionProviders";

const LayoutWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  if (!loading) {
    return <LoadingComponent />;
  }

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
