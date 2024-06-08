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
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddDonation from "./AddDonation";
import FooterSecondary from "@/components/FooterSecondary";

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

const fetchDonationById = async (id: string) => {
  const res = await fetch(`${process.env.BASE_URL}/api/donations/${id}`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function DonationDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const donation: Donation = await fetchDonationById(id);

  return (
    <div className="mx-auto md:h-screen min-h-screen px-3 sm:px-5 md:px-20 lg:px-24 xl:px-24 py-8">
      <div>
        <h1 className="font-semibold text-3xl mt-10">{donation.title}</h1>
      </div>
      <div className="md:grid grid-cols-2">
        <div className="flex flex-col justify-start items-start">
          <div className="md:flex md:justify-center items-center">
            <img
              className="my-5 rounded-sm"
              src={donation.descriptions.image ?? "/no-img.jpg"}
              alt={donation.title}
            />
          </div>
          <div>
            <h2 className="text-xl font-medium my-4">
              {donation.descriptions.subtitle}
            </h2>
            <h4 className="text-sm mb-4">Added by: {donation.user_id}</h4>
          </div>
          <div>
            {donation.descriptions.summary && (
              <>
                <h2 className="text-3xl font-normal my-4">Summary</h2>
                <p className="justify-par">{donation.descriptions.summary}</p>
              </>
            )}
            {donation.descriptions.challenge && (
              <>
                <h2 className="text-3xl font-normal my-4">Challenge</h2>
                <p className="justify-par">{donation.descriptions.challenge}</p>
              </>
            )}
            {donation.descriptions.solution && (
              <>
                <h2 className="text-3xl font-normal my-4">Solution</h2>
                <p className="justify-par">{donation.descriptions.solution}</p>
              </>
            )}
            {donation.descriptions.usage && (
              <>
                <h2 className="text-3xl font-normal my-4">
                  How your donation will be used
                </h2>
                <p className="justify-par">{donation.descriptions.usage}</p>
              </>
            )}
          </div>
        </div>
        <div className="md:ml-20">
          <Card className="my-5 shadow-lg rounded-md">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span className="text-2xl font-semibold">{`${donation.amount_currency} ${donation.amount_received}`}</span>{" "}
                <span className="text-sm font-medium">
                  of{" "}
                  <span>{`${donation.amount_currency} ${donation.amount_needed}`}</span>
                </span>
              </CardTitle>
              <CardDescription className="flex justify-between">
                <span>
                  <span className="font-medium">{donation.donation_count}</span>{" "}
                  donations
                </span>
                <span>•</span>
                <span>
                  <span className="font-medium">{`${donation.amount_currency} ${donation.amount_needed - donation.amount_received}`}</span>{" "}
                  to go
                </span>
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
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
                  <AddDonation donation_id={donation.id} />
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
            <Card className="my-5" key={index}>
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
