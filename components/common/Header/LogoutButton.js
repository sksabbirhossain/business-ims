"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LogoutButton = ({ link }) => {
  const router = useRouter();
  //user signout handler
  const signOutHandler = async () => {
    await signOut({ redirect: false, callbackUrl: "/superadmin/login" });
    router.push("/");
    toast.success("Logout successful!");
  };

  return (
    <div className="h-[90px] w-full rounded-md bg-white p-5 shadow-md">
      <div className="flex h-full w-full items-end justify-end gap-5">
        <Link href={link}>
          <button className="rounded bg-secondary px-3 py-1 font-semibold text-white hover:bg-primary">
            Profile
          </button>
        </Link>
        <button
          onClick={signOutHandler}
          className="rounded bg-primary px-3 py-1 font-semibold text-white hover:bg-secondary"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LogoutButton;
