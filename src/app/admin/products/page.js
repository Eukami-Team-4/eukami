import { Button } from "@/components/ui/button";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import PageWrapper from "../components/layout/page-wrapper";
import { DataTable } from "../components/table/data-table";
import { columns } from "./columns";

export default async function ProductsPage() {
  const supabase = createServerComponentClient();
  const { data: products } = await supabase.from("products").select();

  return (
    <PageWrapper title="Products" actions={<PageActions />}>
      <DataTable columns={columns} data={products} />
    </PageWrapper>
  );
}

const PageActions = () => {
  return (
    <>
      <Button>Add Product</Button>
    </>
  );
};
