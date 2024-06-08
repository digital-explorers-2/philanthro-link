"use client";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import LoadingButton from "@/components/LoadingButton";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const currencyMinAmounts: { [key: string]: number } = {
  USD: 1,
  EUR: 2,
  GBP: 0.5,
  KES: 100,
};

// Extract the currency keys
const currencies = Object.keys(currencyMinAmounts) as [string, ...string[]];

const formSchema = z
  .object({
    amount: z.string().min(1, { message: "Amount must be provided" }),
    currency: z.enum(currencies, {
      required_error: "You need to select a currency.",
    }),
  })
  .refine(
    (data) => {
      const minAmount = currencyMinAmounts[data.currency];
      return parseInt(data.amount) >= minAmount;
    },
    {
      message:
        "Amount does not meet the minimum required for the selected currency",
      path: ["amount"],
    },
  );

const AddDonation = ({ donation_id }: { donation_id: number }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      amount: "",
      currency: "KES",
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const res = await fetch(
        `/api/users/${"bc4e02e4-c916-44f8-b418-76c7290ec0e7"}/donations`, // TODO: Replace with the actual user ID
        {
          method: "POST",
          body: JSON.stringify({
            ...values,
            donation_id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!res.ok) {
        const { error } = await res.json();
        throw error;
      }

      toast({
        title: "Donation made successfully!",
        description: "Another step taken to achieve a dream!",
      });
    } catch (error: any) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Something went wrong!",
        description: error.message ?? error.toString(),
      });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="grid gap-4 py-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
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
                      {currencies.map((currency) => (
                        <FormItem
                          key={currency}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={currency} />
                          </FormControl>
                          <FormLabel>{currency}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <LoadingButton
            type="submit"
            variant="outline"
            className="mb-1 bg-black text-white w-full"
            isLoading={isLoading}
          >
            Donate
          </LoadingButton>
        </form>
      </Form>
    </div>
  );
};

export default AddDonation;
