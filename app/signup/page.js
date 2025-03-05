"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = () => {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Signup successful! Please log in.");
    router.push("/login");
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <input className="border p-2 my-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" className="border p-2 my-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
