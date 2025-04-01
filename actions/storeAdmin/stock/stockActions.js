"use server";

import { Fetch } from "@/utils/Fetch";

//get all stock
export const getStocks = async (limit, page) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/stock/all?page=${page}&limit=${limit}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

//get a stock
export const getStock = async (stockId) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/stock/${stockId}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

//search stock products
export const searchStock = async (query) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/stock/search?name=${query}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

//delete a stock
export const DeleteStock = async (stockId) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/stock/delete/${stockId}`,
      { cache: "no-store", method: "DELETE" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
