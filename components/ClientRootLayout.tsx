"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";
import AuthProvider from "./providers/AuthProvider";

const ClientRootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Check if the current path is the dashboard
  const isDashboard = pathname?.startsWith("/dashboard");
  const isHomePage = pathname === "/";

  return (
    <main className="min-h-screen flex flex-col">
      <AuthProvider>
        {!isDashboard && <NavBar isHomePage={isHomePage} />}
        {children}
      </AuthProvider>
    </main>
  );
};

export default ClientRootLayout;
