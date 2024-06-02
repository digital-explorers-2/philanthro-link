import React from 'react';
import Link from 'next/link';
import { Home, Plus, List, Edit, LogOut } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function DashboardPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white text-black h-screen p-6 border-r border-gray-200">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 text-sm font-semibold md:text-base mb-8">
          <img src="/logo.png" alt="Logo" className="h-7 w-21" />
          <span className="sr-only">PhilanthroLink</span>
        </Link>
        
        {/* Main Section */}
        <div className="mb-8 text-sm">
          <h2 className="font-semibold mb-4">Main</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/dashboard" className="flex items-center gap-5 text-muted-foreground transition-colors hover:text-primary p-2 text-black">
              <Home className="w-4 h-4" />
              Dashboard
            </Link>
            <Link href="/dashboard/add-donations" className="flex items-center gap-5 text-muted-foreground transition-colors hover:text-primary p-2 text-black">
              <Plus className="w-4 h-4" />
              Add Donations
            </Link>
            <Link href="/dashboard/donations" className="flex items-center gap-5 text-muted-foreground transition-colors hover:text-primary p-2 text-black">
              <List className="w-4 h-4" />
              Donations
            </Link>
          </nav>
        </div>

        {/* Account Section */}
        <div className="mb-8 text-sm">
          <h2 className="text-m font-semibold mb-4">Account</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/dashboard/edit-profile" className="flex items-center gap-5 text-muted-foreground transition-colors hover:text-primary p-2 text-black">
              <Edit className="w-4 h-4" />
              Edit Profile
            </Link>
            <Link href="/logout" className="flex items-center gap-5 text-muted-foreground transition-colors hover:text-primary p-2 text-black">
              <LogOut className="w-4 h-4" />
              Logout
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-6 ml-12">
        <div className="flex justify-between items-center mb-6">
          <Tabs defaultValue="dashboard" className="flex-grow">
            <div className="flex justify-between items-center">
              <TabsList className="flex space-x-4">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="add-donations">Add Donations</TabsTrigger>
                <TabsTrigger value="donations">Donations</TabsTrigger>
              </TabsList>
              <Avatar className="ml-4">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>

            <TabsContent value="dashboard">
              <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
              <p className="text-gray-500 mb-6">Summary</p>

              {/* Cards */}
              <div className="flex space-x-6">
                <div className="bg-white shadow p-4 rounded-lg w-1/3 border border-gray-200">
                  <h2 className="text-sm font-semibold">Title 1</h2>
                  <p className="text-xl font-bold mt-2">Value 1</p>
                  <p className="text-gray-500 text-sm mt-1">This is an explanation of the first value.</p>
                </div>
                <div className="bg-white shadow p-4 rounded-lg w-1/3 border border-gray-200">
                  <h2 className="text-sm font-semibold">Title 2</h2>
                  <p className="text-xl font-bold mt-2">Value 2</p>
                  <p className="text-gray-500 text-sm mt-1">This is an explanation of the second value.</p>
                </div>
                <div className="bg-white shadow p-4 rounded-lg w-1/3 border border-gray-200">
                  <h2 className="text-sm font-semibold">Title 3</h2>
                  <p className="text-xl font-bold mt-2">Value 3</p>
                  <p className="text-gray-500 text-sm mt-1">This is an explanation of the third value.</p>
                </div>
              </div>
              <p className="text-gray-500 mb-6 mt-6">Good causes</p>

              {/* Causes You Have Funded */}
              <div className="bg-white shadow p-4 rounded-lg border border-gray-200 w-full">
                <h2 className="text-sm font-semibold mb-4">Causes you have funded</h2>
                <div className="flex items-center mb-4">
                  <Avatar className="w-14 h-14 mr-4">
                    <AvatarImage src="https://via.placeholder.com/150" alt="Floods in Kenya" className="w-full h-full object-cover" />
                    <AvatarFallback>F</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">Floods in Kenya</p>
                    <p className="text-gray-500">Your Contribution: Ksh. 30,000</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Avatar className="w-14 h-14 mr-4">
                    <AvatarImage src="https://via.placeholder.com/150" alt="Floods in Kenya" className="w-full h-full object-cover" />
                    <AvatarFallback>F</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">Floods in Kenya</p>
                    <p className="text-gray-500">Your Contribution: Ksh. 30,000</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Avatar className="w-14 h-14 mr-4">
                    <AvatarImage src="https://via.placeholder.com/150" alt="Floods in Kenya" className="w-full h-full object-cover" />
                    <AvatarFallback>F</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">Floods in Kenya</p>
                    <p className="text-gray-500">Your Contribution: Ksh. 30,000</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="add-donations">
            <h1 className="text-2xl font-semibold mb-4">Add Donations</h1>
              <p className="text-gray-500 mb-6">Create Donation</p>


            </TabsContent>

            <TabsContent value="donations">
              <h1 className="text-2xl font-semibold mb-4">Donations</h1>
              <p className="text-gray-500 mb-6">Summary</p>
              <p className="text-gray-500 mb-6">Thank you for donating to these causes!</p>
              
              {/* Donation Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(6).fill(0).map((_, index) => (
                  <div key={index} className="bg-white shadow p-4 rounded-lg border border-gray-200">
                    <img src="https://via.placeholder.com/150" alt="Donation Image" className="w-full h-32 object-cover mb-4 rounded-md" />
                    <h2 className="text-sm font-semibold">Cause {index + 1}</h2>
                    <p className="text-gray-500">Amount donated: Ksh. {Math.floor(Math.random() * 100000)}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
