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
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          className="border p-2 my-2 w-full rounded"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="border p-2 my-2 w-full rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-2" onClick={() => login(username, password)}>
          Login
        </button>
      </div>
    </div>
  );
}
