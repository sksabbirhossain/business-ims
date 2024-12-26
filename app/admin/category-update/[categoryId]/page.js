import { getCategory } from "@/actions/storeAdmin/category/categoryActions";
import CategoryUpdateForm from "@/components/admin/CategoryUpdate/CategoryUpdateForm";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";

export const metadata = {
  title: "Category Update",
};

const CategoryUpdate = async ({ params: { categoryId } }) => {
  // get a category for showing update category form
  const category = await getCategory(categoryId);

  return (
    <Container>
      {/* page heading */}
      <PageHeader headText={"Update category"} />
      {/* update form */}
      <div className="flex h-[75vh] w-full items-center justify-center rounded-md bg-white px-2 py-5 shadow-sm shadow-primary">
        <div className="w-full max-w-[400px] rounded p-5 shadow">
          {/* form componet */}
          <CategoryUpdateForm category={category} />
        </div>
      </div>
    </Container>
  );
};

export default CategoryUpdate;
