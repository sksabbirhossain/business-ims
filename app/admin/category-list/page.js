import { getCategories } from "@/actions/storeAdmin/category/categoryActions";
import CategoryItem from "@/components/admin/Category-list/CategoryItem";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "Category List",
};

const CategoryList = async () => {
  const data = await getCategories();

  // decide what to render
  let content;

  if (data?.data && data?.data?.length === 0) {
    content = <p>No category found!</p>;
  }

  if (data?.errors) {
    content = <p>{data?.errors?.common?.msg}</p>;
  }

  if (data?.data && data?.data?.length > 0) {
    content = data?.data?.map((category) => (
      <CategoryItem key={category._id} category={category} />
    ));
  }

  return (
    <Container>
      {/* add page header */}
      <PageHeader headText="category List" />
      {/* category table */}
      <div className="relative overflow-x-auto rounded-md shadow-sm shadow-primary">
        <table className="w-full text-left text-sm text-text/80 rtl:text-right">
          <thead className="bg-primary/25 text-xs uppercase text-text">
            <tr>
              <th scope="col" className="px-2 py-4">
                Category image
              </th>
              <th scope="col" className="px-2 py-4">
                Category name
              </th>
              <th scope="col" className="px-2 py-4">
                Description
              </th>
              <th scope="col" className="px-2 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
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

export default CategoryList;
