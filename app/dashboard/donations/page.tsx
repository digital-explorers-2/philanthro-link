import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SideBar from "@/components/SideBar";
import TabsLayout from "@/components/TabsLayout";

export default function Donations() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <div className="flex-grow p-6 md:ml-12">
        <div className="flex justify-between items-center mb-6">
          <TabsLayout currentTab="donations">
            <h1 className="text-2xl font-semibold mb-4">Donations</h1>
            <p className="text-gray-500 mb-6">Summary</p>
            <p className="text-gray-500 mb-6">
              Thank you for donating to these causes!
            </p>

            {/* Donation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white shadow p-4 rounded-lg border border-gray-200"
                  >
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Donation Image"
                      className="w-full h-32 object-cover mb-4 rounded-md"
                    />
                    <h2 className="text-sm font-semibold">Cause {index + 1}</h2>
                    <p className="text-gray-500">
                      Amount donated: Ksh. {Math.floor(Math.random() * 100000)}
                    </p>
                  </div>
                ))}
            </div>
          </TabsLayout>
        </div>
      </div>
    </div>
  );
}
