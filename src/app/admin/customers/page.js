import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import PageWrapper from "../components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { DataTable } from "../components/table/data-table";

export default async function CustomersPage() {
  const supabase = createClientComponentClient();
  const { data: customer } = await supabase.from("customer").select();

  return (
    <PageWrapper title="Customers" actions={<PageActions />}>
      <DataTable columns={columns} data={customer} />
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
