/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { getStock } from "@/actions/storeAdmin/stock/stockActions";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import React from "react";

export const metadata = {
  title: "Stock Details",
};

const StockDetails = async ({ params }) => {
  const stockId = (await params).stockId;
  const stock = await getStock(stockId);
  return (
    <Container>
      <PageHeader headText="Stock Details" />
      {/* details */}
      <div className="rounded-lg bg-white/50 p-4 shadow-md backdrop-blur">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-3">
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold">Product Name</h2>
              <p className="text-gray-800">{stock?.data?.name}</p>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold">product description</h2>
              <p className="text-gray-800">{stock?.data?.description}</p>
            </div>
            <div className="space-y-3 rounded shadow shadow-primary">
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">Category</h2>
                <p className="text-gray-800">{stock?.data?.category?.name}</p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">Category Description</h2>
                <p className="text-gray-800">
                  {stock?.data?.category?.description}
                </p>
              </div>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold">Unit of Measure</h2>
              <p className="text-gray-800">{stock?.data?.uom}</p>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold">Purchase Price</h2>
              <p className="text-gray-800">{stock?.data?.purchasePrice} Taka</p>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold">Selling Price</h2>
              <p className="text-gray-800">{stock?.data?.sellingPrice} Taka</p>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold">Total Price</h2>
              <p className="text-gray-800">{stock?.data?.totalPrice} Taka</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-3 rounded shadow shadow-primary">
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">Supplier</h2>
                <p className="text-gray-800">
                  {stock?.data?.supplierInfo?.name}
                </p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">Supplier Shop Name</h2>
                <p className="text-gray-800">
                  {stock?.data?.supplierInfo?.shopName}
                </p>
              </div>
              <div className="space-y-1 rounded p-3 shadow">
                <h2 className="text-md font-semibold">
                  Supplier Contact Number
                </h2>
                <p className="text-gray-800">
                  {stock?.data?.supplierInfo?.phone}
                </p>
              </div>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold">Quantity</h2>
              <p className="text-gray-800">{stock?.data?.quantity}</p>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold">SKU</h2>
              <p className="text-gray-800">{stock?.data?.sku}</p>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold">Bar Code</h2>
              <p className="text-gray-800">{stock?.data?.barcode}</p>
            </div>
            <div className="space-y-1 rounded p-3 shadow">
              <h2 className="text-md font-semibold">Status</h2>
              <p className="text-gray-800">
                {stock?.data?.status ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StockDetails;
