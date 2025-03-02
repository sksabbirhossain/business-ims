"use client";
import { createContext, useContext, useState } from "react";

export const AddToCartContext = createContext();

export default function useAddToCart() {
  return useContext(AddToCartContext);
}

export function AddToCartProvider({ children }) {
  const [carts, setCarts] = useState(false);

  //toggle mobile menu handler
  const addToCart = (item) => {
    setCarts((prev) => [...prev, item]);
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
