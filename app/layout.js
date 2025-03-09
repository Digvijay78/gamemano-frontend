"use client";

import Navbar1 from "@/components/Navbar1";
import Footer from "@/components/Footer";
import "../app/globals.css";
import Sidebar from "@/components/sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-black">
      <body className="h-full bg-black text-white">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Sidebar - Hidden on small screens */}
          <aside className="hidden md:block">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            <Navbar1 />
            <main className="flex-1 p-4 sm:p-6">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

