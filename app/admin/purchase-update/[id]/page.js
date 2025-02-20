import { getCategories } from "@/actions/storeAdmin/category/categoryActions";
import { getPurchase } from "@/actions/storeAdmin/purchase/purchaseActions";
import { getSuppliers } from "@/actions/storeAdmin/supplier/supplierActions";
import PurchaseUpdateForm from "@/components/admin/Purchase/PurchaseUpdateForm";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export const metadata = {
  title: "Update Purchase",
};

const PurchaseUpdate = async ({ params }) => {
  const purchaseId = (await params).id;
  //get categories
  const categories = await getCategories();
  //get suppliers
  const suppliers = await getSuppliers();
  //get purchase details by id
  const purchase = await getPurchase(purchaseId);

  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="add purchase" />

      {/* update product form */}
      <PurchaseUpdateForm
        categories={categories}
        suppliers={suppliers}
        purchase={purchase}
      />
    </Container>
  );
};

export default PurchaseUpdate;
