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
            try {
                const { data, error } = await supabase.schema("Eukami_v1").from("Collection").select();

                if (error) {
                    throw new Error(error.message);
                }

                setCollections(data);
            } catch (error) {
                console.error("Failed to fetch collections:", error);
                // Handle the error in your UI as needed
            }
        };

        getData();
    }, [supabase]);

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
