"use client";
import Button from "@/components/common/Button/Button";
import Container from "@/components/common/Container/Container";
import FormInput from "@/components/common/FormInput/FormInput";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import { useState } from "react";
import { toast } from "react-toastify";

const CreateStore = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [storeName, setStoreName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    if (password !== confirmPassword) {
      setLoading(false);
      return setErrors({
        errors: {
          confirmPassword: {
            msg: "Password and confirm password not match",
          },
        },
      });
    }
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/superadmin/create-store`,
        {
          method: "POST",
          body: JSON.stringify({
            ownerName,
            storeName,
            email,
            phone,
            address,
            website,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await res.json();

      if (data?.data?._id) {
        setLoading(false);
        // Reset the form fields
        setOwnerName("");
        setStoreName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setWebsite("");
        setPassword("");
        setConfirmPassword("");
        toast.success("Store created Successful!");
      } else {
        setLoading(false);
        setErrors(data);
      }
    } catch (err) {
      setLoading(false);
      setErrors({
        errors: {
          common: {
            // msg: err.message,
            msg: "Intranal server error!",
          },
        },
      });
    }
  };
  return (
    <Container>
      <PageHeader headText="Create store" />
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-auto w-[90%]">
          <div className="w-full space-y-6 rounded-md bg-white px-4 py-10 shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <FormInput
                      label="store name"
                      type="text"
                      name="storeName"
                      placeholder="Enter store name"
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                    />
                    <p className="text-sm font-semibold text-red-500">
                      {errors?.errors?.storeName?.msg}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <FormInput
                      label="store owner name"
                      type="text"
                      name="ownerName"
                      placeholder="Enter store owner name"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                    />
                    <p className="text-sm font-semibold text-red-500">
                      {errors?.errors?.ownerName?.msg}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <FormInput
                      label="Email"
                      type="email"
                      name="email"
                      placeholder="Enter store email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="text-sm font-semibold text-red-500">
                      {errors?.errors?.email?.msg}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <FormInput
                      label="phone number"
                      type="text"
                      name="phone"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <p className="text-sm font-semibold text-red-500">
                      {errors?.errors?.phone?.msg}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <FormInput
                    label="Website URL (optional)"
                    type="text"
                    name="website"
                    placeholder="Enter website url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />

                  <div className="space-y-2">
                    <FormInput
                      label="Address"
                      type="text"
                      name="address"
                      placeholder="Enter store address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <p className="text-sm font-semibold text-red-500">
                      {errors?.errors?.address?.msg}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <FormInput
                      label="password"
                      type="password"
                      name="password"
                      placeholder="Enter store password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="text-sm font-semibold text-red-500">
                      {errors?.errors?.password?.msg}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <FormInput
                      label="confirm password"
                      type="password"
                      name="confirmPassword"
                      placeholder="Enter store confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <p className="text-sm font-semibold text-red-500">
                      {errors?.errors?.confirmPassword?.msg}
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
                      "Create"
                    )}
                  </Button>
                  {errors?.errors?.common && (
                    <p className="rounded bg-red-600 py-2 text-center text-sm font-medium text-white">
                      {errors?.errors?.common?.msg}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateStore;
