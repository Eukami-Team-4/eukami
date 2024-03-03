"use client";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import PageWrapper from "../components/layout/page-wrapper";
import { DataTable } from "../components/table/data-table";
import { columns } from "./columns";

export default function CollectionsPage() {
    const supabase = createClient();
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await supabase.from("collections").select();
            setCollections(data);
        };
        getData();
    }, [supabase]);

    return (
        <PageWrapper title="Collection" actions={<PageActions />}>
            <DataTable columns={columns} data={collections} />
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
