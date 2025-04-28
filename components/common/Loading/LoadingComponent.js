/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import Image from "next/image";
import React from "react";

const LoadingComponent = () => {
  return (
    <div className="fixed flex h-screen w-full flex-col items-center justify-center bg-slate-900">
      <Image
        src={"/loading.gif"}
        alt="loading..."
        width={150}
        height={150}
        className="object-fill"
      />
    </div>
  );
};

export default LoadingComponent;
