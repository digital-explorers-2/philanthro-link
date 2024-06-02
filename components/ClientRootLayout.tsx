"use client";

import React from 'react';
import NavBar from '@/components/NavBar';
import { usePathname } from 'next/navigation';

const ClientRootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Check if the current path is the dashboard
  const isDashboard = pathname?.startsWith('/dashboard');

  return (
    <main className="min-h-screen flex flex-col">
      {!isDashboard && <NavBar />}
      {children}
    </main>
  );
};

export default ClientRootLayout;
