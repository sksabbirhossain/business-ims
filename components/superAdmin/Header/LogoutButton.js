"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LogoutButton = () => {
  const router = useRouter();
  //user signout handler
  const signOutHandler = async () => {
    await signOut({ redirect: false, callbackUrl: "/superadmin/login" });
    router.push("/superadmin/login");
    toast.success("logout success");
  };

  return (
    <div className="h-[90px] w-[150px] rounded-md bg-white p-5 shadow-md">
      <div className="flex h-full w-full items-end justify-end">
        <button
          onClick={signOutHandler}
          className="rounded bg-primary px-3 py-1 font-semibold text-white hover:bg-secondary"
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default LogoutButton;
