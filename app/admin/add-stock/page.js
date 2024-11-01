"use client";
import Button from "@/components/common/Button/Button";
import Container from "@/components/common/Container/Container";
import FormInput from "@/components/common/FormInput/FormInput";
import TextArea from "@/components/common/FormInput/TextArea";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import SelectInput from "@/components/common/SelectInput/SelectInput";
import { useState } from "react";

const AddStock = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState("");
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [sku, setSku] = useState("");
  const [supplier, setSupplier] = useState("");
  const [image, setImage] = useState(null);
  const [barcode, setBarcode] = useState("");
  const [status, setStatus] = useState("inactive");

  //handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("work");
  };

  return (
    <Container>
      {/* add page header */}
      <PageHeader
        headText="add stcok"
        link="/admin/stock-list"
        linkName="stcok list"
      />

      {/* add stock form */}
      <div className="rounded-md bg-white px-2 py-5 shadow-sm shadow-primary">
        <form onSubmit={handleSubmit}>
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
                name="description"
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
                  value={quantity === 0 ? "" : quantity}
                  name="quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                />

                <SelectInput
                  label="Supplier Info"
                  name="supplier"
                  onChange={(e) => setSupplier(e.target.value)}
                >
                  <option value="">Select Supplier</option>
                </SelectInput>

                <FormInput
                  label="Product Image"
                  type="file"
                  placeholder="Select product Image"
                  value={image}
                  name="image"
                  onChange={(e) => setImage(e.target.value[0])}
                />

                <FormInput
                  label="SKU (Stock Keeping Unit)"
                  type="sku"
                  placeholder="Enter product sku"
                  value={sku}
                  name="sku"
                  onChange={(e) => setSku(e.target.value)}
                />

                <FormInput
                  label="Barcode/QR Code"
                  type="text"
                  placeholder="Enter product barcode"
                  value={barcode}
                  name="barcode"
                  onChange={(e) => setBarcode(e.target.value)}
                />

                <SelectInput
                  label="Status"
                  type="text"
                  placeholder="Enter product status"
                  defaultValue={status}
                  name="status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </SelectInput>

                <div>
                  <Button className="w-full">add stock</Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AddStock;
