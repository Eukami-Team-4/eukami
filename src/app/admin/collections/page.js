import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import PageWrapper from "../components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { DataTable } from "../components/table/data-table";
import { columns } from "./columns";

export default async function CollectionsPage() {
  const supabase = createClientComponentClient();
  const { data: collections } = await supabase.from("collections").select();

  return (
    <PageWrapper title="Collection" actions={<PageActions />}>
      <DataTable columns={columns} data={collections} />
    </PageWrapper>
  );
}

const PageActions = () => {
  return (
    <>
      <Button>Add Collection</Button>
    </>
  );
};
