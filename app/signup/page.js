"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

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
    
    // Store encrypted credentials
    localStorage.setItem("accessToken", accessToken);
    Cookies.set("accessToken", accessToken, { expires: 7, secure: true });

    router.push("/product");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <input
        className="border p-2 my-2 w-64"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 my-2 w-64"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded mt-2"
        onClick={handleSignup}
      >
        Sign Up
      </button>
    </div>
  );
}
