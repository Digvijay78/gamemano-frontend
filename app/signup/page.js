"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";


const CryptoJS = dynamic(() => import("crypto-js"), { ssr: false });

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || "default_secret_key";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const generateAccessToken = (username, password) => {
    return CryptoJS.AES.encrypt(`${username}_${password}`, SECRET_KEY).toString();
  };

  const handleSignup = () => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    const accessToken = generateAccessToken(username, password);

   
    if (typeof window !== "undefined") {
      localStorage.setItem("accessToken", accessToken);
    }

    Cookies.set("accessToken", accessToken, { expires: 7, secure: true });

    router.push("/product");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="p-6 bg-white shadow-lg rounded-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>
        <input
          className="border border-gray-300 p-2 my-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="border border-gray-300 p-2 my-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-amber-500 text-white px-4 py-2 rounded w-full mt-2 font-semibold hover:bg-amber-600 transition-all"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
