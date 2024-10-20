import Button from "@/components/common/Button/Button";
import Container from "@/components/common/Container/Container";
import FormInput from "@/components/common/FormInput/FormInput";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Image from "next/image";

const AddSales = () => {
  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="Add Sale" />
      {/*  */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="col-span-2 space-y-5">
          <div className="space-y-3 rounded-md bg-white px-2 py-5 shadow">
            <div className="w-full space-y-2">
              <p className="text-[15px] font-semibold capitalize">
                search products
              </p>
              <form action="">
                <div className="flex w-full items-center gap-3">
                  <FormInput
                    type="text"
                    label={0}
                    name="search"
                    placeholder="search products from store..."
                  />
                  <Button>Search</Button>
                </div>
              </form>
            </div>
            {/* search items */}
            <div className="space-y-3">
              <div className="flex h-full w-full items-center justify-between border-b pb-2">
                <div className="pt-[1px]">
                  <Image
                    src="/default.jpg"
                    alt="product"
                    width={50}
                    height={50}
                    className="h-[40] w-[40px] rounded-full ring-1 ring-primary"
                  />
                </div>
                <div className="">
                  <p className="text-[14px] font-semibold capitalize text-primary">
                    product name
                  </p>
                  <p className="text-[15px] font-semibold">iphone 15 pro max</p>
                </div>
                <div className="">
                  <p className="text-[14px] font-semibold capitalize text-primary">
                    Qty
                  </p>
                  <input
                    type="number"
                    value="1"
                    className="w-full max-w-[60px] rounded-md border-2 border-primary px-2 focus:outline-none"
                  />
                </div>
                <div className="">
                  <p className="text-[14px] font-semibold capitalize text-primary">
                    price
                  </p>
                  <p className="text-[15px] font-semibold">100</p>
                </div>
                <div>
                  <p className="rounded bg-primary px-1 py-1 text-[12px] font-medium capitalize text-white">
                    Add to Cart
                  </p>
                </div>
              </div>

              {/* card two */}
              <div className="flex h-full w-full items-center justify-between border-b pb-2">
                <div className="pt-[1px]">
                  <Image
                    src="/default.jpg"
                    alt="product"
                    width={50}
                    height={50}
                    className="h-[40] w-[40px] rounded-full ring-1 ring-primary"
                  />
                </div>
                <div className="">
                  <p className="text-[14px] font-semibold capitalize text-primary">
                    product name
                  </p>
                  <p className="text-[15px] font-semibold">iphone 15 pro max</p>
                </div>
                <div className="">
                  <p className="text-[14px] font-semibold capitalize text-primary">
                    Qty
                  </p>
                  <input
                    type="number"
                    value="1"
                    className="w-full max-w-[60px] rounded-md border-2 border-primary px-2 focus:outline-none"
                  />
                </div>
                <div className="">
                  <p className="text-[14px] font-semibold capitalize text-primary">
                    price
                  </p>
                  <p className="text-[15px] font-semibold">100</p>
                </div>
                <div>
                  <p className="rounded bg-primary px-1 py-1 text-[12px] font-medium capitalize text-white">
                    Add to Cart
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* add to cart items */}
          <div className="space-y-3 rounded-md bg-white px-2 py-3">
            <p className="text-[15px] font-semibold capitalize">cart list</p>
            {/* card items */}
            <div className="flex h-full w-full items-center justify-between border-b pb-2">
              <div className="pt-[1px]">
                <Image
                  src="/default.jpg"
                  alt="product"
                  width={50}
                  height={50}
                  className="h-[40] w-[40px] rounded-full ring-1 ring-primary"
                />
              </div>
              <div className="">
                <p className="text-[14px] font-semibold capitalize text-primary">
                  product name
                </p>
                <p className="text-[15px] font-semibold">iphone 15 pro max</p>
              </div>
              <div className="">
                <p className="text-[14px] font-semibold capitalize text-primary">
                  Qty
                </p>
                <p className="text-[15px] font-normal">1</p>
              </div>
              <div className="">
                <p className="text-[14px] font-semibold capitalize text-primary">
                  price
                </p>
                <p className="text-[15px] font-normal">100</p>
              </div>
              <div className="">
                <p className="text-[14px] font-semibold capitalize text-primary">
                  disc
                </p>
                <input
                  type="number"
                  value="10"
                  className="w-full max-w-[100px] rounded-md border-2 border-primary px-2 focus:outline-none"
                />
              </div>
              <div className="">
                <p className="text-[14px] font-semibold capitalize text-primary">
                  Total
                </p>
                <p className="text-[15px] font-normal">100</p>
              </div>
              <div>
                <p className="rounded bg-red-500 text-[12px] font-medium capitalize text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* customer information */}
        <div className="rounded-md bg-secondary/50 px-2 py-5 shadow">
          <form action="">
            <p className="text-[15px] font-semibold capitalize">
              Customer Info
            </p>
            <div className="space-y-3 py-3">
              <FormInput
                label="customer name"
                type="text"
                placeholder="customer name"
                name="name"
              />
              <FormInput
                label="customer Address"
                type="text"
                placeholder="customer address"
                name="address"
              />
            </div>

            <div>
              <FormInput
                label="discount ammount"
                type="text"
                placeholder="discount ammount"
                name="ammount"
              />
              <p className="pt-5 text-end text-base font-medium text-gray-700">
                total Price: <span>1000 tk.</span>
              </p>
            </div>

            <div className="pt-5">
              <Button className="w-full">pay</Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddSales;
