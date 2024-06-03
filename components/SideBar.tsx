"use client";
import React from "react";
import Link from "next/link";
import { Home, Plus, List, Edit, LogOut } from "lucide-react";

export default function SideBar() {
  return (
    <div>
      <aside className="hidden md:block w-64 bg-white text-black h-screen p-6 border-r border-gray-200">
        {/* Logo */}
        <Link
          href="#"
          className="flex items-center gap-2 text-sm font-semibold md:text-base mb-8"
        >
          <img src="/logo.png" alt="Logo" className="h-7 w-21" />
          <span className="sr-only">PhilanthroLink</span>
        </Link>

        {/* Main Section */}
        <div className="mb-8 text-sm">
          <h2 className="font-semibold mb-4">Main</h2>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-5 text-muted-foreground transition-colors hover:text-primary p-2 text-black"
            >
              <Home className="w-4 h-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-5 text-muted-foreground transition-colors hover:text-primary p-2 text-black"
            >
              <Plus className="w-4 h-4" />
              Add Donations
            </Link>
            <Link
              href="/dashboard#add-donations"
              className="flex items-center gap-5 text-muted-foreground transition-colors hover:text-primary p-2 text-black"
            >
              <List className="w-4 h-4" />
              Donations
            </Link>
          </nav>
        </div>

        {/* Account Section */}
        <div className="mb-8 text-sm">
          <h2 className="text-m font-semibold mb-4">Account</h2>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/dashboard/edit-profile"
              className="flex items-center gap-5 text-muted-foreground transition-colors hover:text-primary p-2 text-black"
            >
              <Edit className="w-4 h-4" />
              Edit Profile
            </Link>
            <Link
              href="/logout"
              className="flex items-center gap-5 text-muted-foreground transition-colors hover:text-primary p-2 text-black"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  );
}
