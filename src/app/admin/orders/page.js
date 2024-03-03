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
            const { data } = await supabase.from("orders").select();
            setOrders(data);
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
