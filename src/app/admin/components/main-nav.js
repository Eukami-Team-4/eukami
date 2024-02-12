"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const adminRoutes = [
  { name: "Overview", href: "/admin" },
  { name: "Orders", href: "/admin/orders" },
  { name: "Customers", href: "/admin/customers" },
  { name: "Products", href: "/admin/products" },
  { name: "Collections", href: "/admin/collections" },
  { name: "Settings", href: "/admin/settings" },
];

export function MainNav({ className, ...props }) {
  const pathname = usePathname();
  return (
    <nav
      className={cn("flex items-center gap-4 lg:gap-6", className)}
      {...props}
    >
      {adminRoutes.map((route) => (
        <Link
          key={route.href.split("/").filter(Boolean).pop()}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors text-white hover:text-primary block",
            pathname === route.href && `text-primary font-semibold`
          )}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
}
