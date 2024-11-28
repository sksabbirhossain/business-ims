"use client";
import { SessionProvider } from "next-auth/react";

const SessionProviders = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviders;
