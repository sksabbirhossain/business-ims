/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getDueSales } from "@/actions/storeAdmin/sales/salesActions";
import DueContainer from "@/components/admin/Due/DueContainer";
import DueListActionButtons from "@/components/admin/Due/DueListActionButtons";
import Button from "@/components/common/Button/Button";
import Container from "@/components/common/Container/Container";
import FormInput from "@/components/common/FormInput/FormInput";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Pagination from "@/components/common/Pagination/Pagination";
import { format } from "date-fns";

export const metadata = {
  title: "Due List",
};

const DueList = async ({ searchParams }) => {
  const { page, limit } = await searchParams;
  const dueData = await getDueSales(limit, page);

  return (
    <Container>
      <PageHeader headText="Due list" />

      {/* due container */}
      <DueContainer data={dueData} page={page} limit={limit} />
    </Container>
  );
};

export default DueList;
