"use client"
import { useStore } from "@/app/_context/store-context";
import { Button } from "@/components/ui/button";
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
  const store = useStore();

  const orders = store.orders || [];

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
