/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import { auth } from "./authOptions";

export const Fetch = async (url, options) => {
  const session = await auth();
  return fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      ...(session?.user && {
        Authorization: `Bearer ${session?.user?.accessToken}`,
      }),
    },
  });
};
