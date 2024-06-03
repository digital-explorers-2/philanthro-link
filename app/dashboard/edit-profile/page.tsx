"use client";
import React from "react";
import SideBar from "@/components/SideBar";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
   
  );
}
