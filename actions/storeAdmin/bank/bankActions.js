import { Fetch } from "@/utils/Fetch";

//get banks with paginations
export const getBanks = async (limit, page) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/bank/bank-list?page=${page}&limit=${limit}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

//get banks
export const getAllBank = async () => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/bank/all`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

//get a bank
export const getABank = async (bankId) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/bank/${bankId}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
