"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import LoadingButton from "@/components/LoadingButton";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

const supabase = createClient();

const formSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: "First name must be at least 3 characters." }),
    lastName: z
      .string()
      .min(3, { message: "Last name must be at least 3 characters." }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Must be more than 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Must be more than 8 characters" }),
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function Registration() {
  const router = useRouter();
  const { toast } = useToast();

  // 1. Define the form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.firstName + " " + values.lastName,
          },
        },
      });

      if (error) {
        throw new Error("Error signing up: " + error.message);
      } else {
        toast({
          title: "Account created successfully!",
          description: "You can now log in to your account.",
        });
      }

      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: values.firstName,
          last_name: values.lastName,
          email_address: values.email,
        }),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw error;
      }

      router.replace("/login");
    } catch (error: any) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: error.message ?? error.toString(),
      });
    }
  }

  // 3. Render the form.
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 w-full max-w-md">
        <h1 className="text-xl text-center font-bold mt-4 mb-3">
          Create an account
        </h1>
        <p className="text-base text-center mb-3">
          Enter your email to sign up for this app.
          <br />
          If you have an existing account,{" "}
          <Link href="/login" className="font-bold">
            sign in
          </Link>
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="flex space-x-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="New Password"
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
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <LoadingButton
                variant="outline"
                type="submit"
                className="mb-1 bg-black text-white w-full"
                isLoading={form.formState.isSubmitting}
              >
                Sign up with email
              </LoadingButton>
            </div>
            <p className="text-sm text-center">
              By clicking continue, you agree to our{" "}
              <a href="#" className="font-bold">
                Terms of
                <br />
                Service
              </a>{" "}
              and <a href="#">Privacy Policy</a>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
