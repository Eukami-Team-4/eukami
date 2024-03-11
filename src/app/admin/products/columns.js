/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { MoreHorizontal, Trash2 } from "lucide-react";

import { useAlertProvider } from "@/app/admin/_context/alert-context";
import UpdateProductDrawer from "@/app/admin/products/update-product-drawer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteProduct } from "@/lib/supabase/actions";
import { useState } from "react";
import { toast } from "sonner";
import { DataTableColumnHeader } from "../components/table/column-header";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Product Name" />;
    },
    enableHiding: false,
  },
  {
    id: "Status",
    accessorKey: "availableForSale",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />;
    },
    cell: ({ row }) => {
      const availableForSale = row.getValue("Status");
      return (
        <Badge variant={availableForSale ? "default" : "destructive"}>
          {availableForSale ? "Active" : "Hidden"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "inventory",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Inventory" />;
    },
    cell: ({ row }) => {
      return <div className="text-sm">0 in stock</div>;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Price" />;
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "collectionName",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Collections" />;
    },
    cell: ({ row }) => {
      if (row.original.collection) { 
        return <div className="">{row.original.collection.name}</div>;
      }
      return <div className=""></div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original;
      const alert = useAlertProvider();

      async function deleteRow() {
        const res = await deleteProduct(product.id);
        return res;
      }
      const [open, setOpen] = useState(false);
      return (
        <>
          <UpdateProductDrawer
            product={product}
            open={open}
            setOpen={setOpen}
          ></UpdateProductDrawer>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-8 h-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  navigator.clipboard.writeText(product.id);
                  toast(
                    <div>
                      Product ID:<Badge variant="secondary">{product.id}</Badge>{" "}
                      copied to clipboard
                    </div>
                  );
                }}
              >
                Copy Product ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={()=>{setOpen(true)}}>Edit product details</DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive focus:text-white focus:bg-destructive"
                onClick={async () => {
                  let result = await alert({
                    title: "Confirm product deletion",
                    description: `Are you sure you want to delete this product: ${product.name}, this action cannot be undone.`,
                    action: "Delete",
                    cancel: "Cancel",
                  });

                  if (result.isConfirmed) {
                    const res = await deleteRow();
                    if (res) {
                      toast.success("Product deleted");
                    }
                  }
                }}
              >
                Delete Product
                <Trash2 className="ml-2" size={16} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    },
  },
];
