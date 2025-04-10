"use client";
import Button from "@/components/common/Button/Button";
import FormInput from "@/components/common/FormInput/FormInput";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // set default store login
  useEffect(() => {
    setEmail("amarstore@gmail.com");
    setPassword("amarStore@1234");
  }, []);

  //handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({});
    try {
      const data = await signIn("storeAdmin-login", {
        redirect: false,
        email,
        password,
      });

      if (data?.error) {
        setLoading(false);
        setError({
          errors: {
            common: {
              msg: "Somethng went wrong!",
            },
          },
        });
      } else {
        toast.success("Login Successful!");
        router.push("/admin/dashboard");
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setError({
        errors: {
          common: {
            msg: "Intranal server error!",
          },
        },
      });
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div className="space-y-1">
                <FormInput
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Enter your store email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="text-sm font-medium text-red-600">
                  {error?.errors?.email?.msg}
                </p>
              </div>
              <div className="space-y-1">
                <FormInput
                  label="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-sm font-medium text-red-600">
                  {error?.errors?.password?.msg}
                </p>
              </div>
              <Button className="w-full" disabled={loading}>
                {loading ? (
                  <p className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="5, 5"
                        strokeLinecap="round"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 12 12"
                          to="360 12 12"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  </p>
                ) : (
                  "Login"
                )}
              </Button>
              {error?.errors?.common && (
                <p className="rounded bg-red-600 py-2 text-center text-sm font-medium text-white">
                  {error?.errors?.common?.msg}
                </p>
              )}
            </div>
          </form>
          <div>
            <p className="text-center text-sm capitalize text-text">
              forget your password? please{" "}
              <Link href="/contact-us" className="font-medium text-primary">
                Contact us!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
