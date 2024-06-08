import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TabsLayoutProps {
  children: ReactNode;
  currentTab: string;
}

export default function TabsLayout({ children, currentTab }: TabsLayoutProps): JSX.Element {
  return (
    <div className="flex-grow p-6 md:ml-12">
      <div className="flex justify-between items-center mb-6">
        <Tabs value={currentTab} className="flex-grow">
          <div className="flex justify-between items-center">
            <TabsList className="flex space-x-4">
              <Link href="/app/dashboard" passHref>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              </Link>
              <Link href="/app/add-donations" passHref>
                <TabsTrigger value="add-donations">Add Donations</TabsTrigger>
              </Link>
              <Link href="/app/donations" passHref>
                <TabsTrigger value="donations">Donations</TabsTrigger>
              </Link>
            </TabsList>
            <Avatar className="ml-4">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
          </div>
          <TabsContent value={currentTab}>
            {children}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
