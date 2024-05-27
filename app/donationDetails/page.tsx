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
    <div className="mx-auto md:h-screen">
    <div>
        <h1 className="font-semibold">Floods in Kenya</h1>
    </div>
    <div className="md:grid grid-cols-2">
        <div className="flex flex-col justify-start items-start p-8">
            <div className="md:flex md:justify-center items-center max-sm:p-4">
                <img className="max-w-md md:h-2/3 max-sm:max-h-81 rounded-md" src="/About.jpeg" alt="About us"/>
            </div>
            <div> 
                <h2>Help the people affected by the Floods</h2>
                <h4>Added by: Abby</h4>
            </div>
            <div>
                <h2>Challenge</h2>
                <p>Floods in Kenya are a recurring natural disaster, often caused by heavy rainfall, overflowing rivers, or inadequate drainage systems, especially in urban areas. Kenya typically experiences two rainy seasons: the long rains from March to May and the short rains from October to December. </p>
                <p>During these periods, flooding can occur, leading to displacement of people, destruction of property, loss of lives, and disruption of infrastructure and livelihoods. </p>
            </div>
            <div>
                <h2>Solution</h2>
                <p>Floods in Kenya are a recurring natural disaster, often caused by heavy rainfall, overflowing rivers, or inadequate drainage systems, especially in urban areas. Kenya typically experiences two rainy seasons: the long rains from March to May and the short rains from October to December. </p>
                <p>During these periods, flooding can occur, leading to displacement of people, destruction of property, loss of lives, and disruption of infrastructure and livelihoods. </p>
            </div>
            <div>
                <h2>How your donation will be used</h2>
                <p>Floods in Kenya are a recurring natural disaster, often caused by heavy rainfall, overflowing rivers, or inadequate drainage systems, especially in urban areas. Kenya typically experiences two rainy seasons: the long rains from March to May and the short rains from October to December. </p>
                <p>During these periods, flooding can occur, leading to displacement of people, destruction of property, loss of lives, and disruption of infrastructure and livelihoods. </p>
            </div>
            </div>
            <div>
            <Card>
            <CardHeader>
                <CardTitle>Sh. 2000 <h3>of Ksh. 45000</h3></CardTitle>
                <CardDescription>100 donations <pre>Ksh.25,000 to go</pre></CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" className="mb-1 bg-black text-white w-full">Donate now</Button>
            </CardFooter>
            </Card>

                            {/* These are the cards for other values of donation */}
                            <Card>
            <CardHeader>
                <CardTitle>15K <h3>KSH</h3></CardTitle>
                <CardDescription>emergency food, supplies and long-term aid</CardDescription>
            </CardHeader>
            </Card>

            <Card>
            <CardHeader>
                <CardTitle>50K <h3>KSH</h3></CardTitle>
                <CardDescription>emergency food, supplies and long-term aid</CardDescription>
            </CardHeader>
            </Card>

            <Card>
            <CardHeader>
                <CardTitle>75K <h3>KSH</h3></CardTitle>
                <CardDescription>emergency food, supplies and long-term aid</CardDescription>
            </CardHeader>
            </Card>

            <Card>
            <CardHeader>
                <CardTitle>100K <h3>KSH</h3></CardTitle>
                <CardDescription>emergency food, supplies and long-term aid</CardDescription>
            </CardHeader>
            </Card>

            <Card>
            <CardHeader>
                <CardTitle>500K <h3>KSH</h3></CardTitle>
                <CardDescription>emergency food, supplies and long-term aid</CardDescription>
            </CardHeader>
            </Card>
            </div>


    </div>
    <div>
        <h3>Related areas of donation</h3>
    <Card>
    <img className="max-w-md md:h-2/3 max-sm:max-h-81 rounded-md" src="" alt="Project image"/>
  <CardHeader>
    <CardTitle>Poverty in Africa</CardTitle>
    <CardDescription>Help the children experiencing poverty</CardDescription>
  </CardHeader>
</Card>

<Card>
<img className="max-w-md md:h-2/3 max-sm:max-h-81 rounded-md" src="" alt="Project image"/>
  <CardHeader>
    <CardTitle>Sianka forest fire</CardTitle>
    <CardDescription>Help the people affected by the fire</CardDescription>
  </CardHeader>
</Card>

<Card>
<img className="max-w-md md:h-2/3 max-sm:max-h-81 rounded-md" src="" alt="Project image"/>
  <CardHeader>
    <CardTitle>Soporo Earthquake</CardTitle>
    <CardDescription>Help the people affected by the earthquake</CardDescription>
  </CardHeader>
</Card>
    </div>

    </div>
);
}
