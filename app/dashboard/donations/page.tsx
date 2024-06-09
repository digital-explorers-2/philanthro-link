import React from "react";
import TabsLayout from "@/components/TabsLayout";
import { checkUserLoggedIn, getDonationsByUser } from "../actions";
import NoDonations from "../NoDonations";

export default async function Donations() {
  const user = await checkUserLoggedIn();

  const userDonations = await getDonationsByUser(user.id);

  return (
    <TabsLayout currentTab="donations">
      <h1 className="text-2xl font-semibold mb-4">Donations</h1>
      <p className="text-gray-500 mb-6">Summary</p>
      {userDonations && userDonations.length > 0 ? (
        <>
          <p className="text-gray-500 mb-6">
            Thank you for donating to these causes!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {userDonations.map((item) => (
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
        </>
      ) : (
        <NoDonations />
      )}
    </TabsLayout>
  );
}
