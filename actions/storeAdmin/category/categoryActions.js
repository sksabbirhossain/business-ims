"use server";

import { Fetch } from "@/utils/Fetch";

export const getCategories = async () => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/category-list`,
      // { next: { revalidate: process.env.REVALIDATE_ACTION_TIME } },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
