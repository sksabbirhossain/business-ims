"use client";
import Button from "@/components/common/Button/Button";
import FormInput from "@/components/common/FormInput/FormInput";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const UpdateBankForm = ({ bank }) => {
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { data: session } = useSession();

  useEffect(() => {
    setName(bank?.name);
    setAccountNumber(bank?.accountNumber);
  }, [bank]);



  return (
    <form onSubmit={""}>
      <div className="space-y-4">
        <div className="space-y-2">
          <FormInput
            label={"Bank name"}
            type="text"
            value={name}
            name="name"
            placeholder="enter bank name"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.name?.msg}
          </p>
        </div>

        <div className="space-y-2">
          <FormInput
            label={"Account Number"}
            type="number"
            value={accountNumber}
            name="accountNumber"
            placeholder="enter bank account number"
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <p className="text-sm font-semibold text-red-500">
            {errors?.errors?.accountNumber?.msg}
          </p>
        </div>

        <Button className="w-full" disabled={loading} isPending={loading}>
          update
        </Button>
        {errors?.errors?.common && (
          <p className="rounded bg-red-600 py-2 text-center text-sm font-medium text-white">
            {errors?.errors?.common?.msg}
          </p>
        )}
      </div>
    </form>
  );
};

export default UpdateBankForm;
