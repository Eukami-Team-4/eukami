"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

const StorefrontButton = React.forwardRef(
  ({ children, href, className, ...others }, ref) => {
    const router = useRouter();
    function handleClick(e) {
      if (!href) return;
      router.push(href.toLowerCase().trim());
    }
    return (
      <Button
        onClick={handleClick}
        className={cn("rounded-none uppercase px-8 p-6", className)}
        ref={ref}
        {...others}
      >
        {children}
      </Button>
    );
  }
);
StorefrontButton.displayName = "Button";

export default StorefrontButton;
