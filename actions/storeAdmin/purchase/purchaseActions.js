"use server";

import { Fetch } from "@/utils/Fetch";

export const getPurchases = async () => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/purchase/all`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

//get a purchase
export const getPurchase = async (purchaseId) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/purchase/${purchaseId}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
