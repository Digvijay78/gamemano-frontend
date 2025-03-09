"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { Search, Bell, User, Gamepad2, X, Menu } from "lucide-react";

export default function Navbar1() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const notifications = [
    { id: 1, message: "Alex challenged you to a battle!", sender: "Alex" },
    { id: 2, message: "New season update available!", sender: "Game Admin" },
    { id: 3, message: "John invited you to a clan!", sender: "John" },
  ];

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    setIsAuthenticated(!!accessToken);
  }, []);

  const handleLogout = () => {
    Cookies.remove("accessToken");
    setIsAuthenticated(false);
    setShowUserMenu(false);
    router.push("/login");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  // Toggle both menus
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    setShowNotifications(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowUserMenu(false);
  };

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-800 bg-[#121212] relative">
      {/* Left Section: Navigation (Desktop) */}
      <div className="flex items-center gap-8">
        {/* Sidebar Toggle for Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setShowSidebar(true)}
        >
          <Menu className="h-6 w-6" />
        </button>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-white hover:text-amber-500">
            Home
          </Link>
          <Link href="/product" className="text-white hover:text-amber-500">
            Products
          </Link>
          <Link href="/leaderboard" className="text-white hover:text-amber-500">
            Leaderboard
          </Link>
        </nav>
      </div>

      {/* Right Section: Search, Notification & Auth */}
      <div className="flex items-center gap-4 relative">
        {/* Search Bar */}
        <div className="relative w-80 hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search for games, players, updates..."
            className="bg-[#1e1e1e] text-white rounded-full pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Notification Bell */}
        <button
          className="relative p-2 rounded-full bg-[#1e1e1e] hover:bg-gray-700 transition"
          onClick={toggleNotifications}
        >
          <Bell className="h-5 w-5 text-white" />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white w-4 h-4 flex items-center justify-center rounded-full">
              {notifications.length}
            </span>
          )}
        </button>

        {/* Notification Dropdown */}
        {showNotifications && (
          <div className="absolute top-12 right-12 w-80 bg-[#1e1e1e] text-white shadow-lg rounded-xl p-3 z-50 border border-gray-700">
            <div className="flex justify-between items-center border-b border-gray-600 pb-2">
              <h3 className="text-sm font-bold">Notifications</h3>
              <button
                onClick={() => setShowNotifications(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 mt-2">
              {notifications.map((note) => (
                <div key={note.id} className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-lg transition">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold">{note.sender}</p>
                    <p className="text-gray-400 text-xs">{note.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* User Icon Dropdown */}
        <div className="relative">
          <button
            className="p-2 rounded-full bg-[#1e1e1e] hover:bg-gray-700 transition"
            onClick={toggleUserMenu}
          >
            <User className="h-5 w-5 text-white" />
          </button>

          {showUserMenu && (
            <div className="absolute top-12 right-0 w-40 bg-[#1e1e1e] text-white shadow-lg rounded-xl p-2 z-50 border border-gray-700">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={handleLogin}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Login
                  </button>
                  <Link
                    href="/signup"
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {showSidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="w-64 bg-[#1e1e1e] h-full p-5 shadow-lg">
            {/* Close Button */}
            <button
              className="text-white absolute top-4 right-4"
              onClick={() => setShowSidebar(false)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Sidebar Links */}
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-white hover:text-amber-500" onClick={() => setShowSidebar(false)}>
                Home
              </Link>
              <Link href="/product" className="text-white hover:text-amber-500" onClick={() => setShowSidebar(false)}>
                Products
              </Link>
              <Link href="/leaderboard" className="text-white hover:text-amber-500" onClick={() => setShowSidebar(false)}>
                Leaderboard
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
