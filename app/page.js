import Button from "@/components/common/Button/Button";
import FormInput from "@/components/common/FormInput/FormInput";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-bg px-2 sm:px-0">
      <div className="h-auto w-full max-w-[350px]">
        <div className="space-y-6 bg-white px-4 rounded-md shadow-md w-full py-10">
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
