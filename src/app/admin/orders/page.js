"use client"
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import PageWrapper from "../components/layout/page-wrapper";
import { DataTable } from "../components/table/data-table";
import { columns } from "./columns";
/**
 * @typedef {Object} Order
 * @property {string} id
 * @property {number} amount
 * @property {"pending" | "processing" | "success" | "failed"} status
 * @property {string} email
 */

export default function OrdersPage() {
  const supabase = createClient();
  const [orders, setOrders] = useState([]);
    useEffect(() => {
      const getData = async () => {
        try {
          const { data, error } = await supabase.schema("Eukami_v1").from("Order").select();

          if (error) {
            throw new Error(error.message);
          }

          setOrders(data);
        } catch (error) {
          console.error("Failed to fetch orders:", error);
          // Handle the error in your UI as needed
        }
      };

      getData();
    }, [supabase]);

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
