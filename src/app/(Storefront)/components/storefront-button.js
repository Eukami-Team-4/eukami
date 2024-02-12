"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const StorefrontButton = ({children, href, className, ...others}) => {
    const router = useRouter();
    function handleClick(e){
        if (!href) return;
        router.push(href);
    }
    return (
        <Button onClick={handleClick} className={cn("rounded-none uppercase px-8 p-6", className)} {...others}>
            {children}
        </Button>
    );
}

export default StorefrontButton;