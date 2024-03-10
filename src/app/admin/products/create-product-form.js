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
import { addProduct, getCollections } from "@/lib/supabase/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// {
//   availableForSale?: boolean
//   collection_id?: number | null
//   created_at?: string
//   description?: string | null
//   id?: number
//   name: string
//   price?: number
//   salePrice?: number | null
//   skew?: string | null
// }

const createProductSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().optional(),
  collection_id: z.coerce.number().optional(),
  availableForSale: z.coerce.boolean(),
  price: z.coerce.number().optional(),
  salePrice: z.coerce.number().optional(),
  images: z.array(z.object()),
});

export default function CreateProductForm({ onSubmit, success, error }) {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      name: "",
      description: "",
      availableForSale: true,
      price: 0,
      images: [],
    },
  });

  // 2. Define a submit handler.
  async function handleSubmission(values) {
    try {
      // add images array to the form data
      values.images = images;
      console.log("submitting: ", values);
      const res = await addProduct(values);
      onSubmit(res);
    } catch (error) {
      toast.error(`Failed to create product:, ${error.message}`);
    }
  }
  let collections = useRef([]);

  const [images, setImages] = useState([]);

  useEffect(() => {
    async function loadCollections() {
      collections.current = await getCollections();
    }
    loadCollections();
  }, []);

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
                  {collections?.current?.map((collection) => (
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

          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <FileUploadDropzone
                    multiple={true}
                    images={field.value}
                    setImages={setImages}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
