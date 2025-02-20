"use client";

import Button from "@/components/common/Button/Button";
import FormInput from "@/components/common/FormInput/FormInput";
import TextArea from "@/components/common/FormInput/TextArea";
import SelectInput from "@/components/common/SelectInput/SelectInput";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PurchaseUpdateForm = ({ categories, suppliers, purchase }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [uom, setUom] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sku, setSku] = useState("");
  const [supplier, setSupplier] = useState("");
  const [image, setImage] = useState(null);
  const [barcode, setBarcode] = useState("");
  const [status, setStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { data: session } = useSession();

  const router = useRouter();

  // load default purchase from data
  useEffect(() => {
    if (purchase?.data) {
      setName(purchase.data.name);
      setDescription(purchase.data?.description);
      setCategory(purchase.data?.category);
      setUom(purchase.data?.uom);
      setPurchasePrice(purchase.data?.purchasePrice);
      setSellingPrice(purchase.data?.sellingPrice);
      setQuantity(purchase.data?.quantity);
      setSku(purchase.data?.sku);
      setSupplier(purchase.data?.supplierInfo);
      setImage(purchase.data?.image);
      setBarcode(purchase.data?.barcode);
      setStatus(purchase.data?.status);
    }
  }, [purchase]);

  //handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/admin/purchase/update/${purchase.data?._id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            name,
            description,
            category,
            uom,
            purchasePrice,
            sellingPrice,
            quantity,
            sku,
            supplierInfo: supplier,
            image,
            barcode,
            status,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
        },
      );
      const data = await res.json();

      if (data?.data?._id) {
        setLoading(false);
        router.push("/admin/purchase-list");
        toast.success("Purchase Updated Successful!");
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
    <div className="rounded-md bg-white px-2 py-5 shadow-sm shadow-primary">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <FormInput
                label="product name"
                type="text"
                placeholder="Enter your product name"
                value={name}
                defaultValue={purchase?.data.name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text-sm font-semibold text-red-500">
                {errors?.errors?.name?.msg}
              </p>
            </div>

            <div className="space-y-2">
              <TextArea
                label="product description"
                type="text"
                placeholder="Enter your product description"
                value={description}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <p className="text-sm font-semibold text-red-500">
                {errors?.errors?.description?.msg}
              </p>
            </div>

            <div className="space-y-2">
              <SelectInput
                label="Category"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
                defaultValue={purchase.data.category}
              >
                <option value="">Select Category</option>
                {categories?.data?.map((category) => (
                  <option value={category._id} key={category._id}>
                    {category.name}
                  </option>
                ))}
              </SelectInput>
              <p className="text-sm font-semibold text-red-500">
                {errors?.errors?.category?.msg}
              </p>
            </div>

            <div className="space-y-2">
              <SelectInput
                label="Unit of Measure"
                name="uom"
                onChange={(e) => setUom(e.target.value)}
                defaultValue={purchase.data?.uom}
              >
                <option value="">Select Unit</option>
                <option value="KG">KG</option>
                <option value="PICES">PICES</option>
                <option value="LITER">LITER</option>
              </SelectInput>
              <p className="text-sm font-semibold text-red-500">
                {errors?.errors?.uom?.msg}
              </p>
            </div>

            <div className="space-y-2">
              <FormInput
                label="Purchase Price"
                type="number"
                placeholder="Enter product Purchase Price"
                value={purchasePrice}
                name="purchasePrice"
                onChange={(e) => setPurchasePrice(e.target.value)}
              />
              <p className="text-sm font-semibold text-red-500">
                {errors?.errors?.purchasePrice?.msg}
              </p>
            </div>

            <div className="space-y-2">
              <FormInput
                label={`Selling Price ${uom ? "(per " + uom + ")" : ""}`}
                type="number"
                placeholder="Enter product Selling Price"
                value={sellingPrice}
                name="sellingPrice"
                onChange={(e) => setSellingPrice(e.target.value)}
              />
              <p className="text-sm font-semibold text-red-500">
                {errors?.errors?.sellingPrice?.msg}
              </p>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div className="space-y-2">
                <FormInput
                  label="Quantity"
                  type="text"
                  placeholder="Quantity"
                  value={quantity}
                  name="quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <p className="text-sm font-semibold text-red-500">
                  {errors?.errors?.quantity?.msg}
                </p>
              </div>

              <div className="space-y-2">
                <SelectInput
                  label="Supplier Info"
                  name="supplier"
                  onChange={(e) => setSupplier(e.target.value)}
                  defaultValue={purchase.data.supplierInfo}
                >
                  <option value="">Select Supplier</option>
                  {suppliers?.data?.map((supplier) => (
                    <option value={supplier._id} key={supplier._id}>
                      {supplier.name}
                    </option>
                  ))}
                </SelectInput>
                <p className="text-sm font-semibold text-red-500">
                  {errors?.errors?.supplier?.msg}
                </p>
              </div>

              <div className="space-y-2">
                <FormInput
                  label="Product Image"
                  type="file"
                  placeholder="Select product Image"
                  value={image}
                  name="image"
                  onChange={(e) => setImage(e.target.value[0])}
                />
                <p className="text-sm font-semibold text-red-500">
                  {errors?.errors?.image?.msg}
                </p>
              </div>

              <div className="space-y-2">
                <FormInput
                  label="SKU (Stock Keeping Unit)"
                  type="sku"
                  placeholder="Enter product sku"
                  value={sku}
                  name="sku"
                  onChange={(e) => setSku(e.target.value)}
                />
                {/* <p className="text-sm font-semibold text-red-500">
                  {errors?.errors?.name?.msg}
                </p> */}
              </div>

              <div className="space-y-2">
                <FormInput
                  label="Barcode/QR Code"
                  type="text"
                  placeholder="Enter product barcode"
                  value={barcode}
                  name="barcode"
                  onChange={(e) => setBarcode(e.target.value)}
                />
                {/* <p className="text-sm font-semibold text-red-500">
                  {errors?.errors?.name?.msg}
                </p> */}
              </div>

              <div className="space-y-2">
                <SelectInput
                  label="Status"
                  type="text"
                  placeholder="Enter product status"
                  name="status"
                  defaultValue={purchase.data.status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </SelectInput>
                {/* <p className="text-sm font-semibold text-red-500">
                  {errors?.errors?.name?.msg}
                </p> */}
              </div>

              <div>
                <Button className="w-full">Update product</Button>
              </div>
              {errors?.errors?.common && (
                <p className="rounded bg-red-600 py-2 text-center text-sm font-medium text-white">
                  {errors?.errors?.common?.msg}
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PurchaseUpdateForm;
