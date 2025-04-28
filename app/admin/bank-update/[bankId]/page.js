/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getABank } from "@/actions/storeAdmin/bank/bankActions";
import UpdateBankForm from "@/components/admin/Bank/UpdateBankForm";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export const metadata = {
  title: "Update bank",
};

const BankUpdate = async ({ params }) => {
  const { bankId } = await params;

  const bank = await getABank(bankId);

  return (
    <Container>
      {/* page heading */}
      <PageHeader headText={"Update Bank"} />
      {/* update form */}
      <div className="flex h-full min-h-[75vh] w-full items-center justify-center rounded-md bg-white/50 p-4 px-2 py-5 shadow-sm shadow-primary backdrop-blur">
        <div className="w-full max-w-[400px] rounded p-5 shadow">
          {/* form componet */}
          <UpdateBankForm bank={bank?.data} />
        </div>
      </div>
    </Container>
  );
};

export default BankUpdate;
