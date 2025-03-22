import { Fetch } from "@/utils/Fetch";

//get finance for store
export const getFinance = async () => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/financial`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

//get total purchase and sales for daily
export const getPurchaseAndSales = async () => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/dashboard/purchase-sale`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

//get yearly buy and sales
export const lastYearBuyAndSales = async () => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/dashboard/buy-sale`,
      { cache: "no-store" },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
