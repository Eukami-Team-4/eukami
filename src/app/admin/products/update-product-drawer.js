import UpdateProductForm from "@/app/admin/products/update-product-form";
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
import { toast } from "sonner";

const UpdateProductDrawer = ({ children, product, open, setOpen}) => {
  function onSubmit(res) {
    if (res.id) {
      setOpen(false);
      toast.success("Product updated successfully");
    }
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        className="flex flex-col justify-between w-screen h-[80vh]"
        side={"bottom"}
      >
        <SheetHeader>
          <SheetTitle className='truncate'>Edit Product {product.name}</SheetTitle>
          <SheetDescription>
            Use this form to edit the product details
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1">
          <div className="flex-1">
            <UpdateProductForm onSubmit={onSubmit} product={product}></UpdateProductForm>
          </div>
        </ScrollArea>
        <SheetFooter>
          <div className="flex items-center justify-between gap-3">
            <SheetTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </SheetTrigger>
            <Button type="submit" form="create-product-form">
              Save Changes
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default UpdateProductDrawer;
