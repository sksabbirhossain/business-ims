import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

//cll refresh token
async function refreshTokenHandler(token) {
  console.log("refresh token", token);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/superadmin/me`, {
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
  providers: [
    CredentialsProvider({
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
