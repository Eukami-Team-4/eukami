import CreateProductForm from "@/app/admin/products/create-product-form";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CreateProductDrawer = ({ children }) => {
  const [open, setOpen] = useState(false);
  function onSubmit(res) {
    if (res.id) {
      setOpen(false);
      toast.success("Product created successfully");
    }
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {children || (
          <Button>
            Add Products <Plus size={16} className="ml-2" />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent
        className="flex flex-col justify-between w-screen h-[80vh]"
        side={"bottom"}
      >
        <SheetHeader>
          <SheetTitle>Add New Product</SheetTitle>
          <SheetDescription>
            Use this form to add a new product to the database
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1">
          <div className="flex-1">
            <CreateProductForm onSubmit={onSubmit}></CreateProductForm>
          </div>
        </ScrollArea>
        <SheetFooter>
          <div className="flex items-center justify-between gap-3">
            <SheetTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </SheetTrigger>
            <Button type="submit" form="create-product-form">
              Create Product
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CreateProductDrawer;
