"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string(),
})

export default function Contact() {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
    return( 
    <div className="md:grid grid-cols-2 mx-auto md:h-screen m-20">
      <div className="flex flex-col justify-start items-start p-2 ml-7 max-sm:p-4">
        <h1 className="font-bold text-6xl mb-10">Contact us</h1>
        <h3 className="font-normal text-2xl mb-10">Feel free to reach out</h3>
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
                <Input placeholder="email@janesfakedomain.net" {...field} />
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
                <Textarea placeholder="Enter your question or message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
            <Button variant="outline" type="submit" className="mb-1 bg-black text-white w-full">Submit</Button>
            </div>  
        </form>
      </Form>
    </div>
    </div>
    );
}