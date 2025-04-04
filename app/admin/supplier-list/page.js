import { getSuppliers } from "@/actions/storeAdmin/supplier/supplierActions";
import SupplierItems from "@/components/admin/Supplier/Supplier-list/SupplierItems";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Pagination from "@/components/common/Pagination/Pagination";

export const metadata = {
  title: "Suppliers List",
};

const SupplierList = async ({ searchParams }) => {
  const { page, limit } = await searchParams;
  const suppliers = await getSuppliers(limit, page);

  return (
    <Container>
      {/* add heading */}
      <PageHeader headText="Supplier list" />
      {/* table */}
      {/* all supplier list table */}

      <SupplierItems suppliers={suppliers} />

      {/* pagination  */}
      <div className="flex w-full justify-end pr-3">
        <Pagination data={suppliers} />
      </div>
    </Container>
  );
};

export default SupplierList;
