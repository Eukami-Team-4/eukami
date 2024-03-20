"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton = () => {
    const router = useRouter();
    return (
        <Button variant="ghost" className="text-onyx" onClick={() => router.back()}>
            <ChevronLeft size={12} className="mr-2" /> Go Back
        </Button>
    );
};
