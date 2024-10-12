"use client";
import Button from "@/components/common/Button/Button";
import FormInput from "@/components/common/FormInput/FormInput";
import TextArea from "@/components/common/FormInput/TextArea";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import SelectInput from "@/components/common/SelectInput/SelectInput";
import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState("");
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);

  return (
    <section className="space-y-4 md:space-y-6">
      {/* add page header */}
      <PageHeader headText="add product" />

      {/* add product table */}
      <div className="rounded-md bg-white px-2 py-5 shadow-sm shadow-gray-300">
        <form action="">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="space-y-4">
              <FormInput
                label="product name"
                type="text"
                placeholder="Enter your product name"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <TextArea
                label="product description"
                type="text"
                placeholder="Enter your product description"
                value={description}
                name="name"
                onChange={(e) => setDescription(e.target.value)}
              />

              <SelectInput
                label="Category"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </SelectInput>

              <SelectInput
                label="Unit of Measure"
                name="unit"
                onChange={(e) => setUnit(e.target.value)}
              >
                <option value="">Select Unit</option>
                <option value="kg">KG</option>
                <option value="ton">TON</option>
                <option value="pices">PICES</option>
                <option value="liter">LITER</option>
              </SelectInput>

              <FormInput
                label="Purchase Price"
                type="number"
                placeholder="Enter product Purchase Price"
                value={purchasePrice === 0 ? "" : purchasePrice}
                name="purchasePrice"
                onChange={(e) => setPurchasePrice(e.target.value)}
              />

              <FormInput
                label="Selling Price"
                type="text"
                placeholder="Enter product Selling Price"
                value={sellingPrice === 0 ? "" : sellingPrice}
                name="sellingPrice"
                onChange={(e) => setSellingPrice(e.target.value)}
              />
            </div>
            <div>
              <div className="space-y-4">
                <FormInput
                  label="Quantity"
                  type="text"
                  placeholder="Quantity"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />

                <FormInput
                  label="SKU (Stock Keeping Unit)"
                  type="text"
                  placeholder="Enter your product name"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />

                <FormInput
                  label="Supplier Name"
                  type="text"
                  placeholder="Enter Supplier Name"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />

                <FormInput
                  label="Product Image"
                  type="text"
                  placeholder="Enter your product name"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />

                <FormInput
                  label="Barcode/QR Code"
                  type="text"
                  placeholder="Enter your product name"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />

                <FormInput
                  label="Status"
                  type="text"
                  placeholder="Enter your product name"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />

                <div>
                  <Button className="w-full">add product</Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
