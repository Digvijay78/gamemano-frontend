"use client";

import Navbar1 from "@/components/Navbar1";
import Footer from "@/components/Footer";
import "../app/globals.css";
import Sidebar from "@/components/sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-black">
      <body className="h-full bg-black text-white">
        <div className="flex min-h-screen">
          <Sidebar />
          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            <Navbar1 />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
