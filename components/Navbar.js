import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link href="/" className="text-xl font-bold">E-Commerce</Link>
      <div>
        <Link href="/product" className="mr-4">Products</Link>
        <Link href="/login" className="mr-4">Login</Link>
        <Link href="/signup" className="mr-4">Signup</Link>
      </div>
    </nav>
  );
}
