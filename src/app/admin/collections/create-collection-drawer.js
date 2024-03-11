import CreateCollectionForm from "@/app/admin/collections/create-collection-form";
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

const CreateCollectionDrawer = ({ children }) => {
  const [open, setOpen] = useState(false);
  function onSubmit(res) {
    if (res.id) {
      setOpen(false);
      toast.success("Collection created successfully");
    }
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {children || (
          <Button>
            Add Collection <Plus size={16} className="ml-2" />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent
        className="flex flex-col justify-between w-screen "
        side={"bottom"}
      >
        <SheetHeader>
          <SheetTitle>Add New Collection</SheetTitle>
          <SheetDescription>
            Use this form to add a new collection to the database
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1 h-dvh">
          <div className="flex-1">
            <CreateCollectionForm onSubmit={onSubmit}></CreateCollectionForm>
          </div>
        </ScrollArea>
        <SheetFooter>
          <div className="flex items-center justify-between gap-3">
            <SheetTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </SheetTrigger>
            <Button type="submit" form="create-collection-form">
              Create Collection
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CreateCollectionDrawer;
