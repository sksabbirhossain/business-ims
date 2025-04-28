/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";
import useAddToCart from "@/contexts/addToCartContext";
import React from "react";
import CartItem from "./CartItem";

const CartItemsContainer = () => {
  const { carts } = useAddToCart();
  return (
    <div className="space-y-3 rounded-md bg-white px-2 py-3">
      <p className="text-[15px] font-semibold capitalize">cart list</p>
      {/* card items */}
      {carts.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}
      {/* messages */}
      {carts.length === 0 && (
        <p className="text-center text-sm font-medium capitalize text-gray-700">
          No Selected item in the cart!
        </p>
      )}
    </div>
  );
};

export default CartItemsContainer;
