"use server";

import { Fetch } from "@/utils/Fetch";

//delete a sale
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
