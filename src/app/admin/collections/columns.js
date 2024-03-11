/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Badge, MoreHorizontal, Trash2 } from "lucide-react";

import { useAlertProvider } from "@/app/admin/_context/alert-context";
import UpdateCollectionDrawer from "@/app/admin/collections/update-collection-drawer";
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
import { DataTableColumnHeader } from "../components/table/column-header";
import { toast } from "sonner";

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
      return <DataTableColumnHeader column={column} title="Collection Name" />;
    },
    enableHiding: false,
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Description" />;
    },
    cell: ({ row }) => {
      return <p className="truncate max-w-prose text-muted-foreground">{row.getValue("description")}</p>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const collection = row.original;
      const alert = useAlertProvider();

      async function deleteRow() {
        const res = await deleteProduct(collection.id);
        return res;
      }
      const [open, setOpen] = useState(false);
      return (
        <>
          <UpdateCollectionDrawer
            collection={collection}
            open={open}
            setOpen={setOpen}
          ></UpdateCollectionDrawer>
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
                  navigator.clipboard.writeText(collection.id);
                  toast(
                    <div>
                      Collection ID:<Badge variant="secondary">{collection.id}</Badge>{" "}
                      copied to clipboard
                    </div>
                  );
                }}
              >
                Copy Collection ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={()=>{setOpen(true)}}>Edit collection details</DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive focus:text-white focus:bg-destructive"
                onClick={async () => {
                  let result = await alert({
                    title: "Confirm collection deletion",
                    description: `Are you sure you want to delete this collection: ${collection.name}, this action cannot be undone.`,
                    action: "Delete",
                    cancel: "Cancel",
                  });

                  if (result.isConfirmed) {
                    const res = await deleteRow();
                    if (res) {
                      toast.success("Collection deleted");
                    }
                  }
                }}
              >
                Delete Collection
                <Trash2 className="ml-2" size={16} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      );
    },
  },
];
