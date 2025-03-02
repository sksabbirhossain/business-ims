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
      return setCarts([...carts]);
    }
    setCarts([...carts, item]);
  };

  const info = {
    carts,
    addToCart,
  };

  return (
    <AddToCartContext.Provider value={info}>
      {children}
    </AddToCartContext.Provider>
  );
}
