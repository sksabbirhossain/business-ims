import { getPurchases } from "@/actions/storeAdmin/purchase/purchaseActions";
import ActionButtons from "@/components/admin/Purchase/ActionButtons";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "Purchase List",
};

const AllPurchase = async () => {
  const purchases = await getPurchases();
  const { data } = purchases || [];
  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="all purchase" />

      {/* all purchase item table */}
      <div className="relative overflow-x-auto rounded-md shadow-sm shadow-primary">
        <table className="w-full text-left text-sm text-text/80 rtl:text-right">
          <thead className="bg-primary/25 text-xs uppercase text-text">
            <tr>
              <th scope="col" className="px-2 py-4">
                Product image
              </th>
              <th scope="col" className="px-2 py-4">
                Product name
              </th>
              <th scope="col" className="px-2 py-4">
                Supplier
              </th>
              <th scope="col" className="px-2 py-4">
                Quantity
              </th>
              <th scope="col" className="px-2 py-4">
                Price
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((purchase) => (
              <tr
                className="border-b odd:bg-primary/10 even:bg-secondary/5 hover:bg-secondary/10"
                key={purchase._id}
              >
                <td className="px-2 py-1">
                  <Image
                    src={purchase.picture ? purchase.picture : "/default.jpg"}
                    alt="product image"
                    width={200}
                    height={200}
                    className="h-[35px] w-[35px] rounded-full object-cover ring-1 ring-primary"
                  />
                </td>
                <th
                  scope="row"
                  className="whitespace-nowrap px-2 py-4 font-medium text-gray-900"
                >
                  {purchase.name}
                </th>
                <td className="px-2 py-1">{purchase?.supplierInfo?.name}</td>
                <td className="px-2 py-1">
                  {purchase?.quantity} - {purchase?.uom}
                </td>
                <td className="px-2 py-1">{purchase?.purchasePrice}</td>
                <td className="px-2 py-1">
                  <ActionButtons id={purchase?._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* error message */}
        {purchases?.length === 0 && (
          <p className="py-3 text-center font-semibold capitalize">
            No Purchase found!
          </p>
        )}
      </div>
      {/* pagination  */}
      <div className="flex w-full justify-end pr-3">
        <div className="flex items-center gap-2">
          <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[9px] border border-primary p-1 text-base font-semibold transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white">
            <span>
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
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </span>
          </div>
          <div className="pagination-active flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[9px] border border-primary p-1 text-base font-semibold transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white">
            <span>1</span>
          </div>
          <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[9px] border border-primary p-1 text-base font-semibold transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white">
            <span>2</span>
          </div>
          <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[9px] border border-primary p-1 text-base font-semibold transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white">
            <span>3</span>
          </div>
          <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-[9px] border border-primary p-1 text-base font-semibold transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white">
            <span>
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllPurchase;
