"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // Import router & params
import Loading from "@/utils/Loading";

export default function CategoryDropdown({ onSelectCategory , selectedCategory }) {
  const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
  
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        
        if (Array.isArray(data)) {
            
          setCategories(data); // Ensure categories is an array
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  

  useEffect(() => {
    // Set category from URL if available
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
    //   setSelectedCategory(categoryFromUrl);
      onSelectCategory(categoryFromUrl);
    }
  }, [searchParams, onSelectCategory]);

  const handleChange = (event) => {
    const category = event.target.value;
    // setSelectedCategory(category);
    onSelectCategory(category);

    // Update URL with selected category
    router.push(`/product?category=${category}`, { scroll: false });
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      <label className="block text-sm font-medium text-white mb-1">
        Select a Category:
      </label>

      {categories.length === 0 ? (
        <Loading message="Loading Categories..." />
      ) : (
        <select
          value={selectedCategory}
          onChange={handleChange}
          className="w-full p-2 border border-white text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">-- Choose a Category --</option>
          {categories.map((category) => (
            <option key={category?.slug} value={category?.slug}>
            {category?.name.toUpperCase()}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
