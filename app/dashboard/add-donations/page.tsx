"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SideBar from "@/components/SideBar";
import TabsLayout from "@/components/TabsLayout";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { fileToBase64 } from "@/lib/utils";
import LoadingButton from "@/components/LoadingButton";

const MAX_FILE_SIZE = 5000000;

const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const formSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters." }),
  subtitle: z
    .string()
    .min(3, { message: "Subtitle must be at least 3 characters." }),
  category: z.string(),
  challenge: z.string().optional(),
  solution: z.string().optional(),
  usage: z.string().optional(),
  amount: z.string().min(1, { message: "Amount must be provided" }),
  currency: z.enum(["KES", "USD", "EUR"], {
    required_error: "You need to select a currency.",
  }),
  image: z
    .any()
    .refine((files: FileList) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files: FileList) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported.",
    )
    .optional(),
});

export default function AddDonation() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      category: "",
      challenge: "",
      solution: "",
      usage: "",
      amount: "",
      currency: "KES",
      image: undefined,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    let imageAsBase64 = null;
    if (values.image) {
      imageAsBase64 = await fileToBase64(values.image[0]);
    }

    try {
      const res = await fetch("/api/donations", {
        method: "POST",
        body: JSON.stringify({
          ...values,
          image: imageAsBase64,
          user_id: "bc4e02e4-c916-44f8-b418-76c7290ec0e7", // TODO: Replace with the actual user ID
        }),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw error;
      }

      toast({
        title: "Donation created successfully!",
        description: "Now it's up to the community to help out. All the best!",
      });

      form.reset();
      const data = await res.json();
      console.log(data);
    } catch (error: any) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: error.message ?? error.toString(),
      });
    }
  }

  return (
    <TabsLayout currentTab="add-donations">
      <h1 className="text-2xl font-semibold mb-4">Add Donations</h1>
      <p className="text-gray-500 mb-6">Create Donation</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Main Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter main title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subtitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subtitle</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter subtitle" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter category" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add an image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onBlur={field.onBlur}
                      name={field.name}
                      onChange={(e) => {
                        field.onChange(e.target.files);
                      }}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="challenge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Challenge</FormLabel>
                <FormControl>
                  <Input placeholder="Enter challenge being faced" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="solution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Solution</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter solution to the challenge"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How donation will be used</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter how donation will be used"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target amount</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter target amount(goal)"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="currency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Currency</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="KES" />
                      </FormControl>
                      <FormLabel className="font-normal">KES</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="USD" />
                      </FormControl>
                      <FormLabel className="font-normal">USD</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="EUR" />
                      </FormControl>
                      <FormLabel className="font-normal">EUR</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoadingButton
            variant="outline"
            type="submit"
            className="mb-1 bg-black text-white w-full"
            isLoading={form.formState.isSubmitting}
          >
            Submit
          </LoadingButton>
        </form>
      </Form>
    </TabsLayout>
  );
}
