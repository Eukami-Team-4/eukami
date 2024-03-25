"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addSupportTicket } from "@/lib/supabase/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { isMobilePhone } from "validator";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string({required_error: "Email is required"}),
  phone: z.string({required_error: "Phone number is required"}).refine((value) => {
    return isMobilePhone(value, "any");
  }, {
    message: "A valid phone number is required",
  }),
  message: z.string({required_error: "A valid message is required"}).min(5, {
    message: "A valid message is required",
  }),
});

export const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const [loading, setLoading] = useState(false);

  async function onSubmit(values){
    setLoading(true);
    try {
      const res = await addSupportTicket(values);
      if (res) {
        toast.success("Support ticket submitted successfully");
        //clear form state
        form.reset();
        //wait for 500ms before reloading the page
        setTimeout(() => {
          window.location.reload();
        }
        , 500);
      }
    } catch (error) {
      toast.error(`Failed to add support ticket:, ${error.message}`);
    }
    finally
    {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        id="contact-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className="grid gap-3 py-8 w-96">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="mail@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Phone Number</FormLabel>
                <FormControl>
                  <Input type="phone" placeholder="+447412738403" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Message</FormLabel>
                <FormControl>
                <Textarea
                  placeholder="Description"
                  {...field}
                />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button loading={loading} type="submit">Submit Form</Button>
        </div>
      </form>
    </Form>
  );
};
