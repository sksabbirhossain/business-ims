/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

const Container = ({ children, className }) => {
  return (
    <main className={`space-y-4 md:space-y-6 ${className}`}>
      {children}
    </main>
  );
};

export default Container;
