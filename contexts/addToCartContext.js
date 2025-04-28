/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";
import { createContext, useContext, useState } from "react";

export const AddToCartContext = createContext();

export default function useAddToCart() {
  return useContext(AddToCartContext);
}

export function AddToCartProvider({ children }) {
  const [carts, setCarts] = useState([]);

  //toggle mobile menu handler
  const addToCart = (item) => {
    const oldItem = carts.find((i) => i._id === item._id);

    if (oldItem) {
      oldItem.qty += item.qty;
      oldItem.total = oldItem.qty * oldItem.sellingPrice;
      return setCarts([...carts]);
    }
    item.total = item.qty * item.sellingPrice;
    setCarts([...carts, item]);
  };

  //remove item from cart
  const removeFromCart = (id) => {
    setCarts(carts.filter((item) => item._id !== id));
  };

  const info = {
    carts,
    addToCart,
    removeFromCart,
    setCarts,
  };

  return (
    <AddToCartContext.Provider value={info}>
      {children}
    </AddToCartContext.Provider>
  );
}
