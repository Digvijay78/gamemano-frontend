import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold">Welcome to E-commerce</h1>
      <Link href="/product" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        View Products
      </Link>
    </div>
  );
}
