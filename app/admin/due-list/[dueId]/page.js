/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import DuePaymentForm from "@/components/admin/Due/DuePaymentForm";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

const DuePayment = async ({ params }) => {
  const { dueId } = await params;
  // const duePayment = await getDuePayment(dueId);

  return (
    <Container>
      <PageHeader headText="Due payment" />

      {/* add due payment  */}
      <div className="flex h-full min-h-[75vh] w-full items-center justify-center rounded-md bg-white/50 p-4 px-2 py-5 shadow-sm shadow-primary backdrop-blur">
        <div className="w-full max-w-[400px] rounded p-5 shadow">
          {/* form componet */}
          <DuePaymentForm />
        </div>
      </div>
    </Container>
  );
};

export default DuePayment;
