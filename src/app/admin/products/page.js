"use client"
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import PageWrapper from "../components/layout/page-wrapper";
import { DataTable } from "../components/table/data-table";
import { columns } from "./columns";

export default function ProductsPage() {
  const supabase = createClient();
  const [products, setProducts] = useState([]);
    useEffect(() => {
        const getData = async () => {
          try {
            const { data, error } = await supabase.schema("Eukami_v1").from("Product").select();

            if (error) {
              throw new Error(error.message);
            }
            setProducts(data);
          } catch (error) {
            console.error("Failed to fetch products:", error);
            // Handle the error in your UI as needed
          }
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
