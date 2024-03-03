"use client"
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import PageWrapper from "../components/layout/page-wrapper";
import { DataTable } from "../components/table/data-table";
import { columns } from "./columns";

export default function CustomersPage() {
  const supabase = createClient();
  const [customer, setCustomer] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await supabase.from("customer").select();
            setCustomer(data);
        };
        getData();
    }, [supabase]);

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
