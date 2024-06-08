import React from "react";
import SideBar from "@/components/SideBar";
import TabsLayout from "@/components/TabsLayout";
import { getDonationsByUser } from "../actions";

export default async function Donations() {
  const userDonations = await getDonationsByUser();

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
              {userDonations &&
                userDonations.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white shadow p-4 rounded-lg border border-gray-200"
                  >
                    <img
                      src={item.donations.descriptions.image}
                      alt={item.donations.title}
                      className="w-full h-32 object-cover mb-4 rounded-md"
                    />
                    <h2 className="text-sm font-semibold">
                      {item.donations.title}
                    </h2>
                    <p className="text-gray-500">
                      Amount donated: {item.currency + " " + item.amount}
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
