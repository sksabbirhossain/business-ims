/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getSale } from "@/actions/storeAdmin/sales/salesActions";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import React from "react";

export const metadata = {
  title: "Sales Details",
};

const SalesDetails = async ({ params }) => {
  const salesId = (await params).id;
  const sale = await getSale(salesId);

  return (
    <Container>
      <PageHeader headText="Sales Details" />
      {/* details */}
      <div className="rounded-lg bg-white p-4 shadow-md">
        <div className="grid grid-cols-1 gap-5 capitalize md:grid-cols-2">
          <div className="space-y-3">
            {/* customer information */}
            <div className="space-y-3 rounded shadow shadow-primary">
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">Customer Name</h2>
                <p className="text-gray-800">
                  {sale?.data?.customer?.name || "N/A"}
                </p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">Customer Email</h2>
                <p className="text-gray-800">
                  {sale?.data?.customer?.email || "N/A"}
                </p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">Customer Phone</h2>
                <p className="text-gray-800">
                  {sale?.data?.customer?.phone || "N/A"}
                </p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">Customer Address</h2>
                <p className="text-gray-800">
                  {sale?.data?.customer?.address || "N/A"}
                </p>
              </div>
            </div>

            {/* bank information */}
            <div className="space-y-3 rounded shadow shadow-primary">
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">Bank Name</h2>
                <p className="text-gray-800">
                  {sale?.data?.bankInfo?.name || "N/A"}
                </p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">Account Number</h2>
                <p className="text-gray-800">
                  {sale?.data?.bankInfo?.accountNumber || "N/A"}
                </p>
              </div>
            </div>
            {/* product information */}
            {sale?.data?.cart?.map((item) => (
              <div
                className="space-y-3 rounded capitalize shadow shadow-primary"
                key={item._id}
              >
                <div className="space-y-1 rounded p-3 shadow">
                  <h2 className="text-md font-semibold">prodct name</h2>
                  <p className="text-gray-800">{item?.product?.name}</p>
                </div>
                <div className="space-y-1 rounded p-3 shadow">
                  <h2 className="text-md font-semibold">product price</h2>
                  <p className="text-gray-800">{item?.price} Tk.</p>
                </div>
                <div className="space-y-1 rounded p-3 shadow">
                  <h2 className="text-md font-semibold">product qty</h2>
                  <p className="text-gray-800">{item?.qty}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="space-y-3 rounded shadow shadow-primary">
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">Discount Ammounts</h2>
                <p className="text-gray-800">{sale?.data?.discount} Tk.</p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">Sub Total</h2>
                <p className="text-gray-800">{sale?.data?.subTotal} Tk.</p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">Total Price</h2>
                <p className="text-gray-800">{sale?.data?.totalPrice} Tk.</p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">payment Status</h2>
                <p className="text-gray-800">{sale?.data?.paymentStatus}</p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">payment Method</h2>
                <p className="text-gray-800">{sale?.data?.paymentMethod}</p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">total due</h2>
                <p className="text-gray-800">{sale?.data?.due} Tk.</p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">payment with cash</h2>
                <p className="text-gray-800">{sale?.data?.cash} Tk.</p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">payment with bank</h2>
                <p className="text-gray-800">{sale?.data?.bank} Tk.</p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">Transaction Id</h2>
                <p className="text-gray-800">{sale?.data?.trxid}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SalesDetails;
