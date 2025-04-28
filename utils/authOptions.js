/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

//cll refresh token
async function refreshTokenHandler(token) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/refresh/me`, {
    method: "POST",
    headers: {
      Authorization: `Refresh ${token.refreshToken}`,
    },
  });
  // Check if the response is unauthorized (status code 401)
  if (res.status === 401) {
    await signOut({ redirect: false, callbackUrl: "/login" });
    return null;
  }

  const response = await res.json();
  if (response.status === 200) {
    return {
      ...token,
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
      expiresIn: response.expiresIn,
    };
  } else {
    await signOut({ redirect: false, callbackUrl: "/login" });
    return null;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: process.env.NEXT_PUBLIC_TRUST_HOST,
  providers: [
    // login for superAdmin
    CredentialsProvider({
      id: "superadmin-login", // Unique ID for this provider
      name: "SuperAdmin",
      async authorize(credentials) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/superadmin/login`,
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: {
                "Content-Type": "application/json",
              },
            },
          );

          const user = await res.json();

          if (!user?._id && user?.errors) {
            return user;
          }
          // If no error and we have user data, return it
          if (user?._id && user?.status === 200) {
            return user;
          }
          // Return null if user data could not be retrieved
          return null;
        } catch (er) {
          console.log("err");
        }
      },
    }),

    //login as a store admin
    CredentialsProvider({
      id: "storeAdmin-login", // Unique ID for this provider
      name: "Admin",
      async authorize(credentials) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/admin/login`,
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: {
                "Content-Type": "application/json",
              },
            },
          );

          const user = await res.json();

          if (!user?._id && user?.errors) {
            return user;
          }
          // If no error and we have user data, return it
          if (user?._id && user?.status === 200) {
            return user;
          }
          // Return null if user data could not be retrieved
          return null;
        } catch (er) {
          console.log("err");
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user?.errors) {
        throw new Error(JSON.stringify(user));
      }
      return true;
    },
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      if (user) {
        token = user;
      }

      if (new Date().getTime() < token.expiresIn) return token;

      return await refreshTokenHandler(token);
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },

  session: {
    strategy: "jwt", // Ensure you're using JWT-based sessions
  },
  secret: process.env.NEXTAUTH_SECRET,
});
