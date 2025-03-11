import { Fetch } from "@/utils/Fetch";

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
