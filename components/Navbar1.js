import Link from "next/link";
import { Search, Bell, User } from "lucide-react";

export default function Navbar1() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-xl font-bold text-amber-500">
          GQ
        </Link>
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

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-[#1e1e1e] text-white rounded-full pl-10 pr-4 py-1.5 w-64 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>
        <button className="p-2 rounded-full bg-[#1e1e1e]">
          <Bell className="h-5 w-5 text-white" />
        </button>
        <button className="p-2 rounded-full bg-[#1e1e1e]">
          <User className="h-5 w-5 text-white" />
        </button>
      </div>
    </header>
  );
}
