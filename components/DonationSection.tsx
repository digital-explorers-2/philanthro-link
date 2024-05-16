import React from 'react';
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react'; 

function DonationSection() {
  return (
    <div className="p-6 bg-gray-100">
      <div className="mt-16"> 
        <h2 className="text-3xl font-bold text-center font-dm-sans mb-10">
          <span className="text-black">Open</span> 
          <span className="text-primary"> donations</span>
        </h2>
        <div className="flex justify-center"> 
          <div className="w-[800px] h-[55px] flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-lg">
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
      </div>
    </div>
  );
}

export default DonationSection;
