import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import PageWrapper from "../components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { DataTable } from "../components/table/data-table";

export default async function ProductsPage() {
  const supabase = createClientComponentClient();
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
