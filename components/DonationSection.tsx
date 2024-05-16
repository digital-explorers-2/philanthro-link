import React from 'react';
import { Button } from "@/components/ui/button"; // Importing Button component from custom UI library
import { Search } from 'lucide-react'; // Importing the Search icon from Lucide

function DonationSection() {
  return (
    <div className="p-6 mt-16">
      <h2 className="text-3xl font-bold text-center font-dm-sans mb-10">
        <span className="text-black">Open</span> 
        <span className="text-primary"> donations</span>
      </h2>
      <div className="flex justify-center"> {/* Centering the search bar */}
        <div className="w-[800px] h-[55px] flex items-center border border-gray-300 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Find donations..."
            className="flex-grow outline-none"
          />
          <Button size="icon" className="bg-transparent">
              <Search className="w-6 h-6 text-gray-500" /> {/* Lucide magnifying glass icon */}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DonationSection;
