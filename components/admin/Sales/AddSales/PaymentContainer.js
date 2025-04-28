/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";
import Button from "@/components/common/Button/Button";
import FormInput from "@/components/common/FormInput/FormInput";
import SelectInput from "@/components/common/SelectInput/SelectInput";
import useAddToCart from "@/contexts/addToCartContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PaymentContainer = ({ customerData, banks }) => {
  const { carts, setCarts } = useAddToCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [cash, setCash] = useState(0);
  const [bank, setBank] = useState(0);
  const [selectBank, setSelectBank] = useState(null);
  const [due, setDue] = useState(0);
  const [name, setName] = useState("");
  const [customer, setCustomer] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectCustomer, setSelectCustomer] = useState("new");

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const total = carts.reduce((acc, item) => acc + item.total, 0);
    setSubTotal(total);

    const calculatedTotalPrice = total - discount;
    setTotalPrice(calculatedTotalPrice);

    // Set cash only if it's 0 (meaning user hasn't manually changed it)
    if (parseFloat(cash) === 0) {
      setCash(calculatedTotalPrice);
    }

    setDue(
      calculatedTotalPrice - (parseFloat(cash) || 0) - (parseFloat(bank) || 0),
    );
  }, [carts, discount, bank, cash]);

  // set customer
  const setCustomerHandler = (val) => {
    if (val === "new") {
      setSelectCustomer("new");
    } else if (val === "old") {
      setSelectCustomer("old");
    } else {
      setSelectCustomer("new");
    }
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    //set customer infomations for new or old customer
    let customerInfo;
    if (selectCustomer === "new") {
      customerInfo = {
        name,
        email,
        phone,
        address,
      };
    } else if (selectCustomer === "old") {
      customerInfo = customer;
    }

    if (selectCustomer === "new" && due > 0) {
      alert("You can add due only for existing customer!");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/sale/sales-pament`,
        {
          method: "POST",
          body: JSON.stringify({
            customer: customerInfo,
            discount,
            subTotal,
            cash,
            bank,
            bankInfo: selectBank,
            due,
            totalPrice,
            cart: [
              ...carts.map((item) => ({
                product: item._id,
                qty: item.qty,
                price: item.sellingPrice,
              })),
            ],
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
        },
      );
      const data = await res.json();

      if (data?.data?._id) {
        setCarts([]);
        router.push("/admin/add-sales");
        toast.success("Sales Created Successful!");
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setCash(0);
        setDue(0);
        setBank(0);
        setLoading(false);
      } else {
        setLoading(false);
        setErrors(data);
      }
    } catch (err) {
      setLoading(false);
      setErrors({
        errors: {
          common: {
            msg: err.message,
            // msg: "Intranal server error!",
          },
        },
      });
    }
  };
  return (
    <div className="rounded-md bg-white px-2 py-5 shadow">
      {errors?.errors?.common && (
        <p className="mb-2 rounded-sm bg-red-500 py-2 text-center font-semibold text-white">
          {errors.errors.common.msg}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <p className="pb-2 text-[15px] font-semibold uppercase">
          Customer Info
        </p>
        {/* select customer */}
        <div className="flex w-full overflow-hidden rounded bg-gray-50 ring-1 ring-primary">
          <div
            className={`w-full border-e border-secondary py-2 text-center duration-300 ease-linear ${selectCustomer === "new" ? "bg-primary text-gray-100" : ""}`}
            onClick={() => setCustomerHandler("new")}
          >
            <p className="cursor-pointer select-none text-sm font-medium">
              new customer
            </p>
          </div>
          <div
            className={`w-full py-2 text-center duration-300 ease-linear ${selectCustomer === "old" ? "bg-primary text-gray-100" : ""}`}
            onClick={() => setCustomerHandler("old")}
          >
            <p className="cursor-pointer select-none text-sm font-medium">
              Existing customer
            </p>
          </div>
        </div>

        {/* existing customer select box */}
        {selectCustomer === "old" && (
          <div className="space-y-3 pt-3">
            <SelectInput
              label="Select Customer"
              name="customer"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              required={selectCustomer === "old"}
            >
              <option value="">Select customer</option>
              {customerData?.data.length > 0 &&
                customerData?.data?.map((customer) => (
                  <option key={customer?._id} value={customer?._id}>
                    {customer?.name}
                  </option>
                ))}
            </SelectInput>
          </div>
        )}

        {/* new customer form */}
        {selectCustomer === "new" && (
          <div className="space-y-3 pt-3">
            <FormInput
              label="name"
              type="text"
              placeholder="customer name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormInput
              label="email"
              type="email"
              placeholder="customer email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              label=" phone"
              type="number"
              placeholder="customer phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <FormInput
              label=" Address"
              type="text"
              placeholder="customer address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        )}

        <div>
          {/* discount */}
          <p className="pb-1 pt-3 text-sm font-semibold capitalize">
            sale discount :
          </p>
          <FormInput
            label={0}
            type="number"
            placeholder="discount ammount"
            name="discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          {/* payment method */}
          <p className="pb-1 pt-3 text-base font-semibold uppercase">
            Payment method
          </p>
          {/* cash */}
          <div className="space-y-2 pb-1 pt-3">
            <p className="text-sm font-medium capitalize">cash</p>
            <FormInput
              label={0}
              type="number"
              placeholder="cash ammount"
              name="cash"
              value={cash}
              onChange={(e) => setCash(e.target.value)}
            />
          </div>
          {/* bank */}
          <div className="flex w-full gap-5">
            <div className="space-y-2 pb-1 pt-3">
              <p className="text-sm font-medium capitalize">bank</p>
              <FormInput
                label={0}
                type="number"
                placeholder="bank ammount"
                name="bank"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
              />
            </div>

            <div className="w-full pt-3">
              <p className="text-sm font-medium capitalize">Select Bank</p>
              <SelectInput
                label={""}
                name="selectBank"
                onChange={(e) => setSelectBank(e.target.value)}
                required={bank > 0}
              >
                <option value="">Select Bank</option>
                {banks?.data?.map((bank) => (
                  <option
                    value={bank._id}
                    key={bank._id}
                    className="capitalize"
                  >
                    {bank.name.slice(0, 20)}
                  </option>
                ))}
              </SelectInput>
            </div>
          </div>
          <div className="mt-5 space-y-1 rounded bg-secondary/50 px-2 py-1">
            <p className="flex items-center justify-between text-base font-medium uppercase text-gray-900">
              <span>sub Price:</span> <span>{subTotal} tk.</span>
            </p>
            <p className="flex items-center justify-between text-base font-medium uppercase text-gray-900">
              <span>discount ammounts:</span> <span>{discount} tk.</span>
            </p>
            <p className="flex items-center justify-between text-base font-medium uppercase text-gray-900">
              <span>total due:</span> <span>{due} tk.</span>
            </p>
            <span className="block border-b" />
            <p className="flex items-center justify-between text-base font-medium uppercase text-gray-900">
              <span>Total price:</span> <span>{totalPrice} tk.</span>
            </p>
          </div>
        </div>

        <div className="pt-5">
          <Button className="w-full" isPending={loading}>
            pay
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentContainer;
