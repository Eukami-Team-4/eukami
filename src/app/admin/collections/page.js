"use client";
import { Button } from "@/components/ui/button";
import PageWrapper from "../components/layout/page-wrapper";
import { DataTable } from "../components/table/data-table";
import { columns } from "./columns";
import { useStore } from "@/app/admin/_context/store-context";

export default function CollectionsPage() {
    const store = useStore();

    const collections = store.collections || [];

    return (
        <PageWrapper title="Collection" actions={<PageActions />}>
            <DataTable columns={columns} data={collections} filter="name"/>
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
