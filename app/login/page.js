"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { useRouter } from "next/navigation";

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || "default_secret_key";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Check if user is already logged in via cookies
  useEffect(() => {
    const encryptedAccess = Cookies.get("accessToken");

    if (encryptedAccess) {
      const decryptedAccess = CryptoJS.AES.decrypt(encryptedAccess, SECRET_KEY).toString(CryptoJS.enc.Utf8);

      if (decryptedAccess) {
        router.push("/product"); 
      }
    }
  }, []);

  const generateAccessToken = (username, password) => {
    return CryptoJS.AES.encrypt(`${username}_${password}`, SECRET_KEY).toString();
  };

  const login = (username, password) => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    const accessToken = generateAccessToken(username, password);
    localStorage.setItem("accessToken", accessToken);
    Cookies.set("accessToken", accessToken, { expires: 7, secure: true });
    router.push("/product"); // Redirect after login
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-[#1e1e1e] text-white p-8 rounded-2xl shadow-xl w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <div className="space-y-4">
          <input
            className="w-full bg-[#2a2a2a] text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="w-full bg-[#2a2a2a] text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-[var(--color-amber-500)] text-black font-bold px-4 py-3 rounded-lg hover:opacity-90 transition"
            onClick={() => login(username, password)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
