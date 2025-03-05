"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    alert("Logged out successfully!");
    router.push("/");
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
            <Link href="/login" className="mr-4">Login</Link>
            <Link href="/signup" className="mr-4">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
