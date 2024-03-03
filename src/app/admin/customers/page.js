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
        try {
          const { data, error } = await supabase.schema("Eukami_v1").from("Customer").select();

          if (error) {
            throw new Error(error.message);
          }

          setCustomer(data);
        } catch (error) {
          console.error("Failed to fetch customer data:", error);
          // Handle the error in your UI as needed
        }
      };

      getData();
    }, [supabase]);

  return (
    <PageWrapper title="Customers" actions={<PageActions />}>
      <DataTable columns={columns} data={customer} filter="name"/>
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
