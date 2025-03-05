"use client";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../app/globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
