"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { Bell, X, Menu } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
      <nav className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        {/* Logo and Hamburger for Small Screens */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold mr-4">
            E-Commerce
          </Link>

          {/* Links for Large Screens */}
          <div className="hidden sm:flex items-center space-x-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>|</span>
            <Link href="/product" className="hover:underline">
              Products
            </Link>
            {isAuthenticated && (
                <>
                  <span>|</span>
                  <button onClick={handleLogout} className="hover:underline">
                    Logout
                  </button>
                </>
            )}
          </div>

          {/* Hamburger Menu for Small Screens */}
          <button
              className="sm:hidden text-white ml-2 absolute  right-5"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
            <div className="absolute top-14 left-0 w-full bg-black text-white sm:hidden shadow-lg animate-slide-down">
              <ul className="flex flex-col items-center py-4 space-y-4">
                <li className="w-full">
                  <Link
                      href="/"
                      className="block py-2 w-full text-center hover:bg-gray-800 rounded transition-all duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                      href="/product"
                      className="block py-2 w-full text-center hover:bg-gray-800 rounded transition-all duration-300"
                  >
                    Products
                  </Link>
                </li>
                {isAuthenticated && (
                    <li className="w-full">
                      <button
                          onClick={handleLogout}
                          className="block py-2 w-full text-center hover:bg-gray-800 rounded transition-all duration-300"
                      >
                        Logout
                      </button>
                    </li>
                )}
                {!isAuthenticated && (
                    <>
                      <li className="w-full">
                        <button
                            onClick={handleLogin}
                            className="bg-green-500 py-2 w-11/12 rounded hover:bg-green-700 transition-all duration-300 mx-auto block"
                        >
                          Login
                        </button>
                      </li>
                      <li className="w-full">
                        <Link
                            href="/signup"
                            className="bg-yellow-500 py-2 w-11/12 rounded hover:bg-yellow-600 transition-all duration-300 mx-auto block"
                        >
                          Signup
                        </Link>
                      </li>
                    </>
                )}
              </ul>
            </div>
        )}


        {/* Right Section (Auth Buttons for Large Screens) */}
        <div className="hidden sm:flex items-center space-x-4">
          {isAuthenticated ? (
              <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
          ) : (
              <>
                <button
                    onClick={handleLogin}
                    className="bg-green-500 px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Login
                </button>
                <Link
                    href="/signup"
                    className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 transition"
                >
                  Signup
                </Link>
              </>
          )}
        </div>
      </nav>
  );
}
