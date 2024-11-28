"use client";
import Button from "@/components/common/Button/Button";
import FormInput from "@/components/common/FormInput/FormInput";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();

  const router = useRouter();

  if (session?.user?._id) {
    return router.push("/admin/dashboard");
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-bg px-2 sm:px-0">
      <div className="h-auto w-full max-w-[350px]">
        <div className="w-full space-y-6 rounded-md bg-white px-4 py-10 shadow-md">
          <div className="space-y-1 text-center">
            <p className="text-lg font-semibold capitalize text-text">
              welcome back!
            </p>
            <p className="text-sm capitalize">
              login your store and manage your business!
            </p>
          </div>
          <form action="">
            <div className="space-y-5">
              <FormInput
                label="Email"
                type="email"
                placeholder="Enter your store email address"
              />
              <FormInput
                label="password"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <Button className="w-full">Login</Button>
            </div>
          </form>
          <div>
            <p className="text-center text-sm capitalize text-text">
              forget your password? please{" "}
              <Link
                href="/admin/dashboard"
                className="font-medium text-primary"
              >
                Contact us!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
