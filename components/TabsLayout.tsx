import React, { ReactNode } from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TabsLayoutProps {
  children: ReactNode;
  currentTab: string;
}

export default function TabsLayout({
  children,
  currentTab,
}: TabsLayoutProps): JSX.Element {
  return (
    <Tabs value={currentTab} className="flex-grow">
      <div className="flex justify-between items-center">
        <TabsList className="flex space-x-4">
          <Link href="/dashboard" passHref>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </Link>
          <Link href="/dashboard/add-donations" passHref>
            <TabsTrigger value="add-donations">Add Donations</TabsTrigger>
          </Link>
          <Link href="/dashboard/donations" passHref>
            <TabsTrigger value="donations">Donations</TabsTrigger>
          </Link>
        </TabsList>
        <Avatar className="ml-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <TabsContent value={currentTab}>{children}</TabsContent>
    </Tabs>
  );
}
