"use client";
import React from "react";
import SideBar from "@/components/SideBar";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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

const formSchema = z
  .object({
    username: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    changePassword: z
      .string()
      .min(8, { message: "Must be more than 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Must be more than 8 characters" }),
  })

  .refine((data) => data.changePassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export default function ProfilePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      changePassword: "",
      confirmPassword: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow p-6 md:ml-12">
        <TabsLayout children={undefined} currentTab={""} />
        <h1 className="text-2xl font-semibold mb-4 mt-5">Edit Profile</h1>
        <p className="text-gray-500 mb-6">Summary</p>
        <h1 className="text-2xl font-semibold mb-4">Helena Hills</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>

                  <FormControl>
                    <Input placeholder="@username123" {...field} />
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
                  <FormLabel>Email</FormLabel>

                  <FormControl>
                    <Input placeholder="email@domain.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="changePassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Change Password</FormLabel>

                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter new password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>

                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Re-enter new password"
                      {...field}
                    />
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
      </div>
    </div>
  );
}
