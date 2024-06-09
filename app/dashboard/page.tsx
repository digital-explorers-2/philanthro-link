import React from "react";
import TabsLayout from "@/components/TabsLayout";
import { checkUserLoggedIn, getDonationsByUser } from "./actions";
import Image from "next/image";
import NoDonations from "./NoDonations";

export default async function DashboardPage() {
  const user = await checkUserLoggedIn();

  const userDonations = await getDonationsByUser(user.id);

  const totalAmount = userDonations.reduce(
    (acc, donation) => acc + donation.amount,
    0,
  );

  // impact calculated as a product of the total amount number of donations and a factor of 1.5
  const impact = Math.floor(totalAmount * userDonations.length * 0.015);

  const stats = [
    {
      title: "Amount Donated",
      value: "KES " + totalAmount,
      description: "Total amount donated",
    },
    {
      title: "Count",
      value: userDonations.length,
      description: "Total number of donations",
    },
    {
      title: "People helped",
      value: impact,
      description: "Approximate number of lives impacted",
    },
  ];

  return (
    <TabsLayout currentTab="dashboard">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <p className="text-gray-500 mb-6">Summary</p>

      {/* Cards */}
      <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white shadow p-4 rounded-lg border border-gray-200"
          >
            <h2 className="text-sm font-semibold mb-2">{stat.title}</h2>
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="text-gray-500">{stat.description}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-500 mb-6 mt-6">Good causes</p>

      {/* Causes You Have Funded */}
      <div className="bg-white shadow p-4 rounded-lg border border-gray-200 w-full">
        <h2 className="text-sm font-semibold mb-4">
          Most recent causes you have funded
        </h2>
        {userDonations && userDonations.length > 0 ? (
          userDonations.slice(0, 5).map((donation) => (
            <div className="flex items-center mb-4 gap-2" key={donation.id}>
              <div className="w-14 h-14 rounded-md relative overflow-hidden">
                <Image
                  src={donation.donations.descriptions.image}
                  alt={donation.donations.title}
                  fill={true}
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-bold">{donation.donations.title}</p>
                <p className="text-gray-500">
                  Your Contribution: Ksh. {donation.amount}
                </p>
              </div>
            </div>
          ))
        ) : (
          <NoDonations />
        )}
      </div>
    </TabsLayout>
  );
}
