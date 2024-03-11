import FileUploadDropzone from "@/app/admin/products/file-upload-dropzone";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addCollection } from "@/lib/supabase/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Insert: {
//   created_at?: string
//   description?: string | null
//   id?: number
//   image?: Json | null
//   name?: string | null
// }

const createCollectionSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().optional(),
});

export default function CreateCollectionForm({ onSubmit }) {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(createCollectionSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  // 2. Define a submit handler.
  async function handleSubmission(values) {
    try {
      // add images array to the form data
      values.images = images;
      console.log("submitting: ", values);
      const res = await addCollection(values);
      onSubmit(res);
    } catch (error) {
      toast.error(`Failed to create collection:, ${error.message}`);
    }
  }

  const [images, setImages] = useState([]);

  return (
    <Form {...form}>
      <form
        id="create-collection-form"
        onSubmit={form.handleSubmit(handleSubmission)}
        className="px-0.5 space-y-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Collection Name</FormLabel>
              <FormControl>
                <Input placeholder="Collection X" {...field} />
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
        <div className="">
          <Label>Collection Images</Label>
          <p className="text-[0.8rem] text-muted-foreground">
            Add up to images to your collection. Used to represent your
            collection during checkout, in email, social sharing and more.
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
