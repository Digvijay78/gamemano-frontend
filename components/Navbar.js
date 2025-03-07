"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { Bell, X, Menu } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    setIsAuthenticated(!!accessToken);
  }, []);

  const handleLogout = () => {
    Cookies.remove("accessToken");
    setIsAuthenticated(false);
    router.push("/login");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      {/* Sidebar (Opens on Hover) */}
      <div
        className="relative"
        onMouseEnter={() => setShowSidebar(true)}
        onMouseLeave={() => setShowSidebar(false)}
      >
        <Menu className="cursor-pointer text-white text-xl" />

        <div
          className={`absolute left-0 top-12 bg-white text-gray-800 w-56 p-4 rounded-lg shadow-lg transition-all duration-300 transform ${
            showSidebar ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <ul className="space-y-2">
            <li>
              <Link href="/" className="block p-2 hover:bg-gray-200 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="block p-2 hover:bg-gray-200 rounded">
                Products
              </Link>
            </li>
            {isAuthenticated && (
              <li>
                <button onClick={handleLogout} className="w-full text-left p-2 hover:bg-gray-200 rounded">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Logo */}
      <Link href="/" className="text-xl font-bold">E-Commerce</Link>

      {/* Right Section (Notifications & Auth) */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <div className="relative">
          <button onClick={() => setShowNotifications(!showNotifications)}>
            <Bell className="text-white w-6 h-6 cursor-pointer" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 bg-white text-gray-800 w-64 p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-semibold">Notifications</h3>
                <button onClick={() => setShowNotifications(false)}>
                  <X className="w-5 h-5 text-gray-600 hover:text-gray-800" />
                </button>
              </div>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="p-2 bg-gray-100 rounded">New product launch 🚀</li>
                <li className="p-2 bg-gray-100 rounded">Limited-time discounts 💰</li>
                <li className="p-2 bg-gray-100 rounded">Order update 📦</li>
              </ul>
            </div>
          )}
        </div>

        {/* Authentication Buttons */}
        {isAuthenticated ? (
          <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-700 transition">
            Logout
          </button>
        ) : (
          <>
            <button onClick={handleLogin} className="bg-green-500 px-4 py-2 rounded hover:bg-green-700 transition">
              Login
            </button>
            <Link href="/signup" className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 transition">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
