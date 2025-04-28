/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getAllBank } from "@/actions/storeAdmin/bank/bankActions";
import { getAllCustomer } from "@/actions/storeAdmin/customer/customerActions";
import AddSalesContainer from "@/components/admin/Sales/AddSales/AddSalesContainer";
import CartItemsContainer from "@/components/admin/Sales/AddSales/CartItemsContainer";
import PaymentContainer from "@/components/admin/Sales/AddSales/PaymentContainer";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Add Sales",
};

const AddSales = async () => {
  //get all customer
  const customers = await getAllCustomer();

  //get all bank
  const banks = await getAllBank();

  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="Add Sales" />
      {/*  */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="col-span-2 space-y-5">
          {/* search products  and add to cart*/}
          <AddSalesContainer />

          {/* add to cart items list */}
          <CartItemsContainer />
        </div>

        {/* payment section */}
        <PaymentContainer customerData={customers} banks={banks} />
      </div>
    </Container>
  );
};

export default AddSales;
