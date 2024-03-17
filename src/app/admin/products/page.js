"use client";
import { useStore } from "@/app/_context/store-context";
import CreateProductDrawer from "@/app/admin/products/create-product-drawer";
import PageWrapper from "../components/layout/page-wrapper";
import { DataTable } from "../components/table/data-table";
import { columns } from "./columns";

export default function ProductsPage() {
  const store = useStore();

  const products = store.products || [];

  // should display an error if there is no store

  return (
    <PageWrapper title="Products" actions={<PageActions />}>
      <DataTable columns={columns} data={products} filter="name" />
    </PageWrapper>
  );
}

const PageActions = () => {
  return (
    <>
      <CreateProductDrawer />
    </>
  );
};
