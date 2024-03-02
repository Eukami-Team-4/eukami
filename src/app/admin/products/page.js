"use client"
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import PageWrapper from "../components/layout/page-wrapper";
import { DataTable } from "../components/table/data-table";
import { columns } from "./columns";

export default function ProductsPage() {
  const supabase = createClientComponentClient();
  const [products, setProducts] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await supabase.from("products").select();
            setProducts(data);
        };
        getData();
    }, [supabase]);

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
