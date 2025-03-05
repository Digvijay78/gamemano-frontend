"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/product-details");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Login</h1>
      <input className="border p-2 my-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" className="border p-2 my-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleLogin}>Login</button>
    </div>
  );
}
