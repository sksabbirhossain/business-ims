"use server";

import { Fetch } from "@/utils/Fetch";

//get all sales
export const getAllSales = async (limit, page, query, filter) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/sale/sales?query=${query}&filter=${filter}&page=${page}&limit=${limit}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
//get all sales
export const getDueSales = async (limit, page) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/sale/due-list?page=${page}&limit=${limit}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

//get sales by trxId
export const getSalesByTrxId = async (trxId) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/sale/sales/search?trxId=${trxId}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

//get sales by trxId
export const getDueSalesByNameTrxId = async (query) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/sale/due/search?query=${query}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

//get a single sale
export const getSale = async (saleId) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/sale/sales/${saleId}`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

//delete a sale
export const DeleteSale = async (salesId) => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/sale/sales/${salesId}`,
      { cache: "no-store", method: "DELETE" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
