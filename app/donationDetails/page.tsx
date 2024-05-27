import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const donateMoney = [{
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
]

const relatedDonations = [{
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
]


export default function DonationDetailsPage() {
return(
    <div className="mx-auto md:h-screen min-h-screen px-3 sm:px-5 md:px-20 lg:px-24 xl:px-24 py-8">
    <div>
        <h1 className="font-semibold text-4xl mt-10">Floods in Kenya</h1>
    </div>
    <div className="md:grid grid-cols-2">
        <div className="flex flex-col justify-start items-start">
            <div className="md:flex md:justify-center items-center max-sm:p-4">
                <img className="max-w-md md:h-2/3 max-sm:max-h-81 rounded-md" src="/About.jpeg" alt="About us"/>
            </div>
            <div> 
                <h2 className="text-3xl font-normal my-4">Help the people affected by the Floods</h2>
                <h4 className="text-xl font-medium mb-4">Added by: Abby</h4>
            </div>
            <div>
                <h2 className="text-3xl font-normal my-4">Challenge</h2>
                <p>Floods in Kenya are a recurring natural disaster, often caused by heavy rainfall, overflowing rivers, or inadequate drainage systems, especially in urban areas. Kenya typically experiences two rainy seasons: the long rains from March to May and the short rains from October to December. </p>
                <p>During these periods, flooding can occur, leading to displacement of people, destruction of property, loss of lives, and disruption of infrastructure and livelihoods. </p>
            </div>
            <div>
                <h2 className="text-3xl font-normal my-4">Solution</h2>
                <p>Floods in Kenya are a recurring natural disaster, often caused by heavy rainfall, overflowing rivers, or inadequate drainage systems, especially in urban areas. Kenya typically experiences two rainy seasons: the long rains from March to May and the short rains from October to December. </p>
                <p>During these periods, flooding can occur, leading to displacement of people, destruction of property, loss of lives, and disruption of infrastructure and livelihoods. </p>
            </div>
            <div>
                <h2 className="text-3xl font-normal my-4">How your donation will be used</h2>
                <p>Floods in Kenya are a recurring natural disaster, often caused by heavy rainfall, overflowing rivers, or inadequate drainage systems, especially in urban areas. Kenya typically experiences two rainy seasons: the long rains from March to May and the short rains from October to December. </p>
                <p>During these periods, flooding can occur, leading to displacement of people, destruction of property, loss of lives, and disruption of infrastructure and livelihoods. </p>
            </div>
            </div>
            <div>
            <Card className="my-5">
            <CardHeader>
                <CardTitle className="text-lg font-semibold"><span className="text-3xl font-medium">Sh. 2000</span> <span className="ml-20">of Ksh. 45,000</span></CardTitle>
                <CardDescription>100 donations <span className="ml-20">Ksh.25,000 to go</span></CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" className="mb-1 bg-black text-white w-full">Donate now</Button>
            </CardFooter>
            </Card>


            {/* These are the cards for other values of donation */}
            {donateMoney.map((card, index) => (
            <Card className="my-5" key={index}>
                <CardHeader className="flex flex-row justify-between ">
                        <CardTitle>{card.card_title} <p className="mt-2">{card.currency}</p></CardTitle>
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
        <img className="w-full h-48" src={card.image} alt="Project image"/>
            <CardHeader>
                <CardTitle className="text-xl font-medium">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
            </CardHeader>
        </Card>
    ))}
    </div>

    </div>

    </div>
);
}
