"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import FooterSecondary from "@/components/FooterSecondary"


const donateMoney = [
  {
    card_title: "15K",
    currency: "KSH",
    description: "emergency food, supplies and long-term aid",
  },
  {
    card_title: "50K",
    currency: "KSH",
    description: "emergency food, supplies and long-term aid",
  },
  {
    card_title: "75K",
    currency: "KSH",
    description: "emergency food, supplies and long-term aid",
  },
  {
    card_title: "100K",
    currency: "KSH",
    description: "emergency food, supplies and long-term aid",
  },
  {
    card_title: "500K",
    currency: "KSH",
    description: "emergency food, supplies and long-term aid",
  },
];

const relatedDonations = [
  {
    image: "/poverty.jpeg",
    title: "Poverty in Africa",
    description: "Help the children experiencing poverty",
  },
  {
    image: "/fire.jpeg",
    title: "Sianka forest fire",
    description: "Help the people affected by the fire",
  },
  {
    image: "/earthquake.jpeg",
    title: "Soporo Earthquake",
    description: "Help the people affected by the earthquake",
  },
];

const formSchema = z.object({
  amount: z.number(),
  currency: z.enum(["KES", "USD", "EUR"], {
    required_error: "You need to select a currency.",
  }),
});

export default function DonationDetailsPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <div className="mx-auto md:h-screen min-h-screen px-3 sm:px-5 md:px-20 lg:px-24 xl:px-24 py-8">
      <div>
        <h1 className="font-semibold text-4xl mt-10">Floods in Kenya</h1>
      </div>
      <div className="md:grid grid-cols-2">
        <div className="flex flex-col justify-start items-start">
          <div className="md:flex md:justify-center items-center max-sm:p-4">
            <img className="my-5" src="/floods.jpeg" alt="About us" />
          </div>
          <div>
            <h2 className="text-3xl font-normal my-4">
              Help the people affected by the Floods
            </h2>
            <h4 className="text-xl font-medium mb-4">Added by: Abby</h4>
          </div>
          <div>
            <h2 className="text-3xl font-normal my-4">Challenge</h2>
            <p className="justify-par">
              Floods in Kenya are a recurring natural disaster, often caused by
              heavy rainfall, overflowing rivers, or inadequate drainage
              systems, especially in urban areas. Kenya typically experiences
              two rainy seasons: the long rains from March to May and the short
              rains from October to December.{" "}
            </p>
            <p className="justify-par">
              During these periods, flooding can occur, leading to displacement
              of people, destruction of property, loss of lives, and disruption
              of infrastructure and livelihoods.{" "}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-normal my-4">Solution</h2>
            <p className="justify-par">
              Floods in Kenya are a recurring natural disaster, often caused by
              heavy rainfall, overflowing rivers, or inadequate drainage
              systems, especially in urban areas. Kenya typically experiences
              two rainy seasons: the long rains from March to May and the short
              rains from October to December.{" "}
            </p>
            <p className="justify-par">
              During these periods, flooding can occur, leading to displacement
              of people, destruction of property, loss of lives, and disruption
              of infrastructure and livelihoods.{" "}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-normal my-4">
              How your donation will be used
            </h2>
            <p className="justify-par">
              Floods in Kenya are a recurring natural disaster, often caused by
              heavy rainfall, overflowing rivers, or inadequate drainage
              systems, especially in urban areas. Kenya typically experiences
              two rainy seasons: the long rains from March to May and the short
              rains from October to December.{" "}
            </p>
            <p className="justify-par">
              During these periods, flooding can occur, leading to displacement
              of people, destruction of property, loss of lives, and disruption
              of infrastructure and livelihoods.{" "}
            </p>
          </div>
        </div>
        <div className="md:ml-20 ">
          <Card className="my-5 shadow-lg rounded-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                <span className="text-3xl font-medium">Sh. 2000</span>{" "}
                <span className="ml-40">of Ksh. 45,000</span>
              </CardTitle>
              <CardDescription>
                100 donations <span className="ml-40">Ksh.25,000 to go</span>
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    type="button"
                    className="mb-1 bg-black text-white w-full"
                  >
                    Donate now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Donate now</DialogTitle>
                    <DialogDescription>
                      Provide the amount and currency you would like to donate.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                      >
                        <div>
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
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="KES" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        KES
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="USD" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        USD
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="EUR" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        EUR
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <DialogFooter className="sm:justify-start">
                          <DialogClose asChild>
                            <Button
                              variant="outline"
                              type="submit"
                              className="mb-1 bg-black text-white w-full"
                            >
                              Donate
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </form>
                    </Form>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>

          {/* These are the cards for other values of donation */}
          {donateMoney.map((card, index) => (
            <Card className="my-5 shadow-lg rounded-md" key={index}>
              <CardHeader className="flex flex-row justify-between ">
                <CardTitle>
                  {card.card_title} <p className="mt-2">{card.currency}</p>
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-normal my-4">Related areas of donation</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedDonations.map((card, index) => (
            <Card className="my-5">
              <img
                className="w-full h-48"
                src={card.image}
                alt="Project image"
              />
              <CardHeader>
                <CardTitle className="text-xl font-medium">
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <FooterSecondary />
    </div>
  );
}
