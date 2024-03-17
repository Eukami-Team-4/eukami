"use client"
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import PageWrapper from "../components/layout/page-wrapper";
import { DataTable } from "../components/table/data-table";
import { columns } from "./columns";
import { useStore } from "@/app/_context/store-context";

export default function CustomersPage() {
  const store = useStore();

  const customer = store.customer || [];

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
