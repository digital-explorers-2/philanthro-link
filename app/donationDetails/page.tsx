import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


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
                <CardTitle>Sh. 2000 <span className="text-right">of Ksh. 45,000</span></CardTitle>
                <CardDescription>100 donations <span>Ksh.25,000 to go</span></CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" className="mb-1 bg-black text-white w-full">Donate now</Button>
            </CardFooter>
            </Card>

                            {/* These are the cards for other values of donation */}
            <div>
            <Card className="my-5">
                <CardHeader className="flex justify-between ">
                    <div className="flex text-left">
                        <CardTitle>15K <p>KSH</p></CardTitle>
                    
                    <div className=" flex text-right">
                    <CardDescription>emergency food, supplies and long-term aid</CardDescription>
                    </div>
                    </div>
                </CardHeader>
            </Card>
            </div>

            <div>
            <Card className="my-5">
                <CardHeader className="flex justify-between w-full">
                    <div className="flex text-left">
                        <CardTitle>50K <p>KSH</p></CardTitle>
                    
                    <div className=" flex text-right">
                    <CardDescription>emergency food, supplies and long-term aid</CardDescription>
                    </div>
                    </div>
                </CardHeader>
            </Card>
            </div>

            <div>
            <Card className="my-5">
                <CardHeader className="flex justify-between w-full">
                    <div className="flex text-left">
                        <CardTitle>75K <p>KSH</p></CardTitle>
                    
                    <div className=" flex text-right">
                    <CardDescription>emergency food, supplies and long-term aid</CardDescription>
                    </div>
                    </div>
                </CardHeader>
            </Card>
            </div>

            <div>
            <Card className="my-5">
                <CardHeader className="flex justify-between w-full">
                    <div className="flex text-left">
                        <CardTitle>100K <p>KSH</p></CardTitle>
                    
                    <div className=" flex text-right">
                    <CardDescription>emergency food, supplies and long-term aid</CardDescription>
                    </div>
                    </div>
                </CardHeader>
            </Card>
            </div>

            <div>
            <Card className="my-5">
                <CardHeader className="flex justify-between w-full">
                    <div className="flex text-left">
                        <CardTitle>500K <p>KSH</p></CardTitle>
                    
                    <div className=" flex text-right">
                    <CardDescription>emergency food, supplies and long-term aid</CardDescription>
                    </div>
                    </div>
                </CardHeader>
            </Card>
            </div>


    </div>
    </div>
    <div>
    <h3 className="text-2xl font-normal my-4">Related areas of donation</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="my-5">
            <img className="max-w-md md:h-2/3 max-sm:max-h-81 rounded-md" src="" alt="Project image"/>
            <CardHeader>
                <CardTitle className="text-xl font-medium">Poverty in Africa</CardTitle>
                <CardDescription>Help the children experiencing poverty</CardDescription>
            </CardHeader>
        </Card>

        <Card className="my-5">
            <img className="max-w-md md:h-2/3 max-sm:max-h-81 rounded-md" src="" alt="Project image"/>
            <CardHeader>
                <CardTitle className="text-xl font-medium">Sianka forest fire</CardTitle>
                <CardDescription>Help the people affected by the fire</CardDescription>
            </CardHeader>
        </Card>

        <Card className="my-5">
            <img className="max-w-md md:h-2/3 max-sm:max-h-81 rounded-md" src="" alt="Project image"/>
            <CardHeader>
                <CardTitle className="text-xl font-medium">Soporo Earthquake</CardTitle>
                <CardDescription>Help the people affected by the earthquake</CardDescription>
            </CardHeader>
        </Card>
    </div>

    </div>

    </div>
);
}
