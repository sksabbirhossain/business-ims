"use server";

import { signIn } from "@/utils/authOptions";

export const superAdminLogin = async (formData) => {
  try {
    const res = await signIn("credentials", {
      email: formData?.email,
      password: formData?.password,
      redirect: false,
    });
    return res;
  } catch (error) {
    throw error;
  }
};
