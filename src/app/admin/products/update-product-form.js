import { useStore } from "@/app/_context/store-context";
import FileUploadDropzone from "@/app/admin/products/file-upload-dropzone";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { addProduct } from "@/lib/supabase/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// UpdateSchema: {
//   availableForSale?: boolean
//   collection_id?: number | null
//   created_at?: string
//   description?: string | null
//   id?: number
//   name?: string
//   price?: number
//   salePrice?: number | null
//   sku?: string | null
// }

const updateProductSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().optional(),
  collection_id: z.coerce.number().optional(),
  availableForSale: z.coerce.boolean(),
  price: z.coerce.number().optional(),
  salePrice: z.coerce.number().optional(),
  // images: z.array(z.object()),
});

export default function UpdateProductForm({ onSubmit, product }) {
  const form = useForm({
    resolver: zodResolver(updateProductSchema),
    defaultValues: {
      name: product.name || "",
      description: product.description || "",
      collection_id: product.collection_id
        ? product.collection_id.toString()
        : undefined,
      availableForSale: product.availableForSale || false,
      price: product.price || 0,
      salePrice: product.salePrice || undefined,
      // images: product.images || [],
    },
  });

  // 2. Define a submit handler.
  async function handleSubmission(values) {
    try {
      //add the product id to the form data
      values.id = product.id;
      // add images array to the form data
      values.images = images;
      console.log("submitting: ", values);
      const res = await addProduct(values);
      onSubmit(res);
    } catch (error) {
      toast.error(`Failed to create product:, ${error.message}`);
    }
  }

  const [images, setImages] = useState(product.images || []);

  const store = useStore();

  const collections = store.collections || [];

  return (
    <Form {...form}>
      <form
        id="create-product-form"
        onSubmit={form.handleSubmit(handleSubmission)}
        className="px-0.5 space-y-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Product X" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="collection_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Collection</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a collection" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {collections?.map((collection) => (
                    <SelectItem
                      key={collection.id}
                      value={collection.id.toString()}
                      textValue={collection.name}
                    >
                      {collection.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="availableForSale"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between p-3 border rounded-lg shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Available for sale</FormLabel>
                <FormDescription>
                  Show the product on the storefront
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  aria-readonly
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price (£)</FormLabel>
                <FormControl>
                  <Input placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="salePrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sale Price (£)</FormLabel>
                <FormControl>
                  <Input placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="">
          <Label>Product Images</Label>
          <p className="text-[0.8rem] text-muted-foreground">
            Add up to 10 images to your product. Used to represent your product
            during checkout, in email, social sharing and more.
          </p>
          <FileUploadDropzone
            multiple={true}
            images={images}
            setImages={setImages}
          />
        </div>
      </form>
    </Form>
  );
}
