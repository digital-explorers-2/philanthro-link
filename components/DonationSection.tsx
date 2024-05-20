import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Search, Bookmark } from "lucide-react";
import { Input } from "./ui/input";

function DonationSection() {
  return (
    <div className="p-6 bg-gray-100">
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center font-dm-sans mb-10">
          <span className="text-black">Open</span>
          <span className="text-primary"> donations</span>
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-[800px] h-[55px] flex items-center border border-gray-300 rounded-full p-2 shadow-lg">
            <Input
              type="text"
              placeholder="Find donations..."
              className="flex-grow outline-none border-none bg-transparent rounded-full text-gray-500"
            />
            <Button
              variant="outline"
              size="icon"
              className="rounded-full ml-2 hover:border-primary"
            >
              <Search className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center mb-14">
          <div className="w-full max-w-[970px] flex flex-wrap justify-center gap-2">
            {[
              "All",
              "Disaster",
              "Children",
              "Food Crisis",
              "Health",
              "Education",
              "Homeless",
              "Animal",
              "Pandemic",
              "War Crisis",
            ].map((category) => (
              <Button
                variant="custom"
                key={category}
                className="rounded-full px-4 py-1"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[970px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-full bg-white shadow-md rounded-lg flex flex-col"
              >
                <img
                  src="/floods.png"
                  alt="Floods"
                  className="w-full h-[210px] object-cover rounded-t-lg"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold">Donation {index + 1}</h3>
                    <span className="text-gray-500 text-sm">
                      14th May, 2024
                    </span>
                  </div>
                  <p className="text-gray-500 mb-4">
                    Description of the donation.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-primary">
                      Raised: <span className="text-gray-500">Ksh 20000</span>
                    </span>
                    <span className="text-primary">
                      Goal: <span className="text-gray-500">Ksh 45000</span>
                    </span>
                  </div>
                  <div className="mt-2">
                    <Progress
                      value={(20000 / 45000) * 100}
                      className="h-2 bg-gray-200 rounded-full"
                    >
                      <div className="h-full bg-primary rounded-full"></div>
                    </Progress>
                    <div className="text-xs text-gray-500 mt-1">
                      Raised by <span className="text-primary">56</span> people
                      in <span className="text-primary">15</span> days
                    </div>
                  </div>
                </div>
                <div className="flex mt-4 p-4">
                  <Button
                    variant="custom"
                    size="icon"
                    className="rounded-md mr-2"
                  >
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button variant="custom" className="flex-grow rounded-md">
                    Donate now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="w-full max-w-[970px] flex justify-between items-center flex-wrap gap-2">
            <div className="flex gap-2 justify-center md:justify-start flex-grow">
              <Button className="bg-transparent text-primary hover:bg-gray-300 px-4 py-1">
                &lt;
              </Button>
              {[1, 2, 3, "...", 49, 50].map((page, index) => (
                <Button
                  key={index}
                  className="bg-transparent text-primary hover:bg-gray-300 px-4 py-1"
                >
                  {page}
                </Button>
              ))}
              <Button className="bg-transparent text-primary hover:bg-gray-300 px-4 py-1">
                &gt;
              </Button>
            </div>
            <Button className="bg-transparent text-primary hover:bg-gray-300 items-center px-4 py-1 hidden md:flex">
              Next Page &rarr;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationSection;
