import { auth } from "./authOptions";

export const Fetch = async (url, options) => {
  const session = await auth();

  return fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      ...(session && { Authorization: `Bearer ${session.accessToken}` }),
    },
  });
};
