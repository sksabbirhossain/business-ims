"use client";
import Button from "@/components/common/Button/Button";
import FormInput from "@/components/common/FormInput/FormInput";
import useAddToCart from "@/contexts/addToCartContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PaymentContainer = () => {
  const { carts, setCarts } = useAddToCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    //caculate total price
    const total = carts.reduce((acc, item) => acc + item.total, 0);
    setSubTotal(total);
    setTotalPrice(total - discount);
  }, [carts, discount]);

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/sale/sales-pament`,
        {
          method: "POST",
          body: JSON.stringify({
            customer: {
              name,
              email,
              phone,
              address,
            },
            discount,
            subTotal,
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
        <p className="text-[15px] font-semibold uppercase">Customer Info</p>
        <div className="space-y-3 py-3">
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

        <p className="py-2 text-[15px] font-semibold uppercase">Ammounts</p>

        <div>
          <FormInput
            label="discount"
            type="text"
            placeholder="discount ammount"
            name="discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <div className="space-y-1 pt-5">
            <p className="flex items-center justify-between text-base font-semibold capitalize text-gray-600">
              <span>sub Price:</span> <span>{subTotal} tk.</span>
            </p>
            <p className="flex items-center justify-between text-base font-semibold capitalize text-gray-600">
              <span>discount ammounts:</span> <span>{discount} tk.</span>
            </p>
            <span className="block border-b-2" />
            <p className="flex items-center justify-between text-base font-semibold capitalize text-gray-600">
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
