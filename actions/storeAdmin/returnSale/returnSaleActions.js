"use server";

import { Fetch } from "@/utils/Fetch";

//get all return sales
export const returnSales = async () => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/return-sale/all`,
      {
        cache: "no-store",
      },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

//create a  return sale
export const createReturnSale = async (formData) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/return-sale`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
