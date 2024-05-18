import React from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Search, Bookmark } from 'lucide-react';

function DonationSection() {
  return (
    <div className="p-6 bg-gray-100">
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center font-dm-sans mb-10">
          <span className="text-black">Open</span>
          <span className="text-primary"> donations</span>
        </h2>
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-[800px] h-[55px] flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-lg">
            <input
              type="text"
              placeholder="Find donations..."
              className="flex-grow outline-none"
            />
            <Button size="icon" className="bg-transparent">
              <Search className="w-6 h-6 text-gray-500" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center mb-14">
          <div className="w-full max-w-[970px] flex flex-wrap justify-center gap-2">
            {['All', 'Disaster', 'Children', 'Food Crisis', 'Health', 'Education', 'Homeless', 'Animal', 'Pandemic', 'War Crisis'].map((category) => (
              <Button key={category} className="border border-primary text-primary bg-transparent hover:bg-gray-300 rounded-full px-4 py-1">
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[970px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-full bg-white shadow-md rounded-lg flex flex-col">
                <img
                  src="/floods.png"
                  alt="Floods"
                  className="w-full h-[210px] object-cover rounded-t-lg"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold">Donation {index + 1}</h3>
                    <span className="text-gray-500 text-sm">14th May, 2024</span>
                  </div>
                  <p className="text-gray-500 mb-4">Description of the donation.</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-primary">Raised: <span className="text-gray-500">Ksh 20000</span></span>
                    <span className="text-primary">Goal: <span className="text-gray-500">Ksh 45000</span></span>
                  </div>
                  <div className="mt-2">
                    <Progress value={20000 / 45000 * 100} className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-primary rounded-full"></div>
                    </Progress>
                    <div className="text-xs text-gray-500 mt-1">
                      Raised by <span className="text-primary">56</span> people in <span className="text-primary">15</span> days
                    </div>
                  </div>
                </div>
                <div className="flex mt-4 p-4">
                  <Button size="icon" className="bg-white border border-primary hover:bg-gray-300 rounded-md mr-2">
                    <Bookmark className="w-4 h-4 text-primary" />
                  </Button>
                  <Button className="flex-grow bg-white border border-primary hover:bg-gray-300 text-primary rounded-md">
                    Donate now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationSection;
