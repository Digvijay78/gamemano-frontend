"use client";
import Products from "@/components/AllProducts/Products";
import Link from "next/link";

export default function Product() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Product List</h1>
        
        <Products />

      <ul>
        <li>
          <Link href="/product-details" className="text-blue-600">Product 1</Link>
        </li>
      </ul>
    </div>
  );
}
