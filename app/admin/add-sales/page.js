import AddSalesContainer from "@/components/admin/Sales/AddSales/AddSalesContainer";
import CartItemsContainer from "@/components/admin/Sales/AddSales/CartItemsContainer";
import PaymentContainer from "@/components/admin/Sales/AddSales/PaymentContainer";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

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

        {/* payment section */}
        <PaymentContainer />
      </div>
    </Container>
  );
};

export default AddSales;
