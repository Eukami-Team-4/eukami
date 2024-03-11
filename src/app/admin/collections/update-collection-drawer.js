import UpdateCollectionForm from "@/app/admin/collections/update-collection-form";
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

const UpdateCollectionDrawer = ({ collection, open, setOpen}) => {
  function onSubmit(res) {
    if (res.id) {
      setOpen(false);
      toast.success("Collection updated successfully");
    }
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        className="flex flex-col justify-between w-screen "
        side={"bottom"}
      >
        <SheetHeader>
          <SheetTitle className='truncate'>Edit Collection {collection.name}</SheetTitle>
          <SheetDescription>
            Use this form to edit the collection details
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1 h-dvh">
          <div className="flex-1">
            <UpdateCollectionForm onSubmit={onSubmit} collection={collection}></UpdateCollectionForm>
          </div>
        </ScrollArea>
        <SheetFooter>
          <div className="flex items-center justify-between gap-3">
            <SheetTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </SheetTrigger>
            <Button type="submit" form="create-collection-form">
              Save Changes
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default UpdateCollectionDrawer;
