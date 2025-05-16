import { Fetch } from "@/utils/Fetch";

//get banks with paginations
export const getSubscriptions = async (limit, page) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/subscription/subscription-list?page=${page}&limit=${limit}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
