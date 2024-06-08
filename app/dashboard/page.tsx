"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import SideBar from "@/components/SideBar";
import TabsLayout from "@/components/TabsLayout";

function DashboardPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />
      {/* Main Content */}
      <div className="flex-grow p-6 md:ml-12">
        <div className="flex justify-between items-center mb-6">
            <TabsLayout currentTab="dashboard">
              <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
              <p className="text-gray-500 mb-6">Summary</p>

              {/* Cards */}
              <div className="flex space-x-6">
                <div className="bg-white shadow p-4 rounded-lg w-1/3 border border-gray-200">
                  <h2 className="text-sm font-semibold">Title 1</h2>
                  <p className="text-xl font-bold mt-2">Value 1</p>
                  <p className="text-gray-500 text-sm mt-1">
                    This is an explanation of the first value.
                  </p>
                </div>
                <div className="bg-white shadow p-4 rounded-lg w-1/3 border border-gray-200">
                  <h2 className="text-sm font-semibold">Title 2</h2>
                  <p className="text-xl font-bold mt-2">Value 2</p>
                  <p className="text-gray-500 text-sm mt-1">
                    This is an explanation of the second value.
                  </p>
                </div>
                <div className="bg-white shadow p-4 rounded-lg w-1/3 border border-gray-200">
                  <h2 className="text-sm font-semibold">Title 3</h2>
                  <p className="text-xl font-bold mt-2">Value 3</p>
                  <p className="text-gray-500 text-sm mt-1">
                    This is an explanation of the third value.
                  </p>
                </div>
              </div>
              <p className="text-gray-500 mb-6 mt-6">Good causes</p>

              {/* Causes You Have Funded */}
              <div className="bg-white shadow p-4 rounded-lg border border-gray-200 w-full">
                <h2 className="text-sm font-semibold mb-4">
                  Causes you have funded
                </h2>
                <div className="flex items-center mb-4">
                  <Avatar className="w-14 h-14 mr-4">
                    <AvatarImage
                      src="https://via.placeholder.com/150"
                      alt="Floods in Kenya"
                      className="w-full h-full object-cover"
                    />
                    <AvatarFallback>F</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">Floods in Kenya</p>
                    <p className="text-gray-500">
                      Your Contribution: Ksh. 30,000
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Avatar className="w-14 h-14 mr-4">
                    <AvatarImage
                      src="https://via.placeholder.com/150"
                      alt="Floods in Kenya"
                      className="w-full h-full object-cover"
                    />
                    <AvatarFallback>F</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">Floods in Kenya</p>
                    <p className="text-gray-500">
                      Your Contribution: Ksh. 30,000
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Avatar className="w-14 h-14 mr-4">
                    <AvatarImage
                      src="https://via.placeholder.com/150"
                      alt="Floods in Kenya"
                      className="w-full h-full object-cover"
                    />
                    <AvatarFallback>F</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">Floods in Kenya</p>
                    <p className="text-gray-500">
                      Your Contribution: Ksh. 30,000
                    </p>
                  </div>
                </div>
              </div>
            </TabsLayout>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
