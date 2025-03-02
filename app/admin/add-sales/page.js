import AddSalesContainer from "@/components/admin/Sales/AddSales/AddSalesContainer";
import CartItemsContainer from "@/components/admin/Sales/AddSales/CartItemsContainer";
import Button from "@/components/common/Button/Button";
import Container from "@/components/common/Container/Container";
import FormInput from "@/components/common/FormInput/FormInput";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "Add Sales",
};

const AddSales = () => {
  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="Add Sales" />
      {/*  */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="col-span-2 space-y-5">
          {/* search products  and add to cart*/}
          <AddSalesContainer />

          {/* add to cart items list */}
          <CartItemsContainer />
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
