"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  main_title: z.string(),
  subtitle: z.string(),
  category: z.string(),
  challenge: z.string(),
  solution: z.string(),
  usage: z.string(),
  amount: z.number(),
  currency: z.enum(["KES", "USD", "EUR"], {
    required_error: "You need to select a currency.",
  }),
  image: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Image is required",
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Max file size is 5MB",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/gif"].includes(file.type),
      {
        message: "Only .jpg, .png, .gif formats are supported",
      },
    ),
});

export default function AddDonation() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      main_title: "",
      subtitle: "",
      category: "",
      challenge: "",
      solution: "",
      usage: "",
      amount: 0,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log(data);
  }
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <div className="flex-grow p-6 md:ml-12">
        <div className="flex justify-between items-center mb-6">
          <TabsLayout currentTab="add-donations">
            <h1 className="text-2xl font-semibold mb-4">Add Donations</h1>
            <p className="text-gray-500 mb-6">Create Donation</p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="main_title"
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
                          <Input type="file" {...field} />
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
                        <Input
                          placeholder="Enter challenge being faced"
                          {...field}
                        />
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
                <Button
                  variant="outline"
                  type="submit"
                  className="mb-1 bg-black text-white w-full"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </TabsLayout>
        </div>
      </div>
    </div>
  );
}