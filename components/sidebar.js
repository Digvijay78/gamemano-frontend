"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, BarChart2, Package, FileText, Grid, Settings, HelpCircle, Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-[#0a0a0a] border-r border-gray-800 flex flex-col items-center py-6 w-16
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative transition-transform duration-300 ease-in-out`}
      >
        {/* Logo */}
        <Link href="/" className="mb-8">
          <div className="text-amber-500 font-bold text-xl">GQ</div>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-6 flex-1">
          <NavItem href="/" icon={<Home />} label="Home" />
          <NavItem href="/product" icon={<Package />} label="Product" />
          <NavItem href="/files" icon={<FileText />} label="Files" />
          <NavItem href="/dashboard" icon={<Grid />} label="Dashboard" />
          <NavItem href="/stats" icon={<BarChart2 />} label="Stats" />
          <NavItem href="/help" icon={<HelpCircle />} label="Help" />
        </div>

        {/* Settings */}
        <div className="mt-auto">
          <NavItem href="/settings" icon={<Settings />} label="Settings" />
        </div>
      </div>

      {/* Overlay (for closing on click outside) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

// Navigation Item Component
function NavItem({ href, icon, label }) {
  return (
    <Link href={href} className="p-2 text-gray-500 hover:text-amber-500 transition-colors">
      <div className="h-6 w-6">{icon}</div>
      <span className="sr-only">{label}</span> 
    </Link>
  );
}
