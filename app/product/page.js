"use client";
import { useState } from "react";
import CategoryDropdown from "@/components/AllProducts/CategoryDropdown";
import Products from "@/components/AllProducts/Products";
import Link from "next/link";

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log("PARENET", selectedCategory);
  

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold">Product List</h1>

      {/* Category Dropdown */}
      <CategoryDropdown onSelectCategory={setSelectedCategory} />

      {/* Products Component - Pass Selected Category */}
      <Products category={selectedCategory} />

      
    </div>
  );
}
