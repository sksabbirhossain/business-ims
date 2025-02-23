import { getCategories } from "@/actions/storeAdmin/category/categoryActions";
import { getSuppliers } from "@/actions/storeAdmin/supplier/supplierActions";
import StockForm from "@/components/admin/Stock/StockForm";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export const metadata = {
  title: "Add Stock",
};

const AddStock = async () => {
  //get categories
  const categories = await getCategories();
  //get suppliers
  const suppliers = await getSuppliers();
  return (
    <Container>
      {/* add page header */}
      <PageHeader
        headText="add stcok"
        link="/admin/stock-list"
        linkName="stcok list"
      />

      {/* add stock form */}
      <StockForm categories={categories} suppliers={suppliers} />
    </Container>
  );
};

export default AddStock;
