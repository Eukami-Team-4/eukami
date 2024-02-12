import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import PageWrapper from "../components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { DataTable } from "../components/table/data-table";
/**
 * @typedef {Object} Order
 * @property {string} id
 * @property {number} amount
 * @property {"pending" | "processing" | "success" | "failed"} status
 * @property {string} email
 */

export default async function ProductsPage() {
  const supabase = createClientComponentClient();
  const { data: orders } = await supabase.from("orders").select();

  return (
    <PageWrapper title="Orders" actions={<PageActions />}>
      <DataTable filter="email" columns={columns} data={orders} />
    </PageWrapper>
  );
}

const PageActions = () => {
  return (
    <>
      <Button>Create Order</Button>
    </>
  );
};
