"use server";

import { Fetch } from "@/utils/Fetch";
import { redirect } from "next/navigation";

//get suppliers
export const getSuppliers = async () => {
  try {
    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/suppliers`,
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return err.message;
  }
};

//add supplier
export const addSupplier = async (prevState, formData) => {
  try {
    const formDataObject = Object.fromEntries(formData.entries());

    const res = await Fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/admin/create-supplier`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formDataObject),
      },
    );
    const data = await res.json();

    if (data?.data?._id) {
      redirect("/admin/supplier-list");
    }

    if (data?.errors) {
      return data;
    }
  } catch (err) {
    return err.message;
  }
};
