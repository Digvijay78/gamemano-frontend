"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication on client side after component mounts
  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    setIsAuthenticated(!!accessToken);
  }, []);

  const handleLogout = () => {
    Cookies.remove("accessToken");
    setIsAuthenticated(false); // Update state immediately
    router.push("/login");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">E-Commerce</Link>
      <div>
        <Link href="/product" className="mr-4">Products</Link>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
        ) : (
          <>
            <button onClick={handleLogin} className="mr-4 bg-green-500 px-4 py-2 rounded">Login</button>
            <Link href="/signup" className="bg-yellow-500 px-4 py-2 rounded">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
