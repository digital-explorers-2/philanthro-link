"use client";

import { z } from "zod";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FooterSecondary from "@/components/FooterSecondary";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import LoadingButton from "@/components/LoadingButton";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string(),
});

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, message } = values;
    setLoading(true);

    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      console.error("EmailJS not configured");
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: "EmailJS not configured",
      });
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: firstName + " " + lastName,
          from_email: email,
          to_email: "khalifa@tlu.ee",
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          toast({
            title: "Message sent!",
            description: "We will get back to you as soon as possible.",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast({
            variant: "destructive",
            title: "Something went wrong!",
            description: error.message ?? error.toString(),
          });
        },
      );
  }
  return (
    <div className="md:mx-20 md:h-screen my-20">
      <div className="md:grid grid-cols-2">
        <div className="flex flex-col justify-start items-start p-2 ml-7 max-sm:p-4">
          <h1 className="font-bold text-6xl mb-10">Contact us</h1>
          <h3 className="font-normal text-2xl mb-10 text-slate-400">
            Feel free to reach out
          </h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane" {...field} />
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
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Smitherton" {...field} />
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
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="email@janesfakedomain.net"
                        {...field}
                      />
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
                    <FormLabel>Your message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your question or message"
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
                  isLoading={loading}
                >
                  Submit
                </LoadingButton>
              </div>
            </form>
          </Form>
        </div>
        <div className="md:flex md:justify-center mt-20 max-sm:p-4">
          <img
            className="w-10/12 h-4/5 max-sm:max-h-81 rounded-md"
            src="/contact.jpeg"
            alt="About us"
          />
        </div>
      </div>

      <FooterSecondary />
    </div>
  );
}
