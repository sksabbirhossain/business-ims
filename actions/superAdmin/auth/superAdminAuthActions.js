"use server";

import { signIn } from "@/utils/superAdmin/superAdminAuth";

export const superAdminLogin = async (formData) => {
  try {
    const res = await signIn("credentials", {
      email: formData?.email,
      password: formData?.password,
      redirect: false,
    });
    return res;
  } catch (error) {
    console.error("superAdminLogin error:", error);
    throw error;
  }
};
