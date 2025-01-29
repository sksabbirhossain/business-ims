"use client";

import LoadingComponent from "@/components/common/Loading/LoadingComponent";
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
