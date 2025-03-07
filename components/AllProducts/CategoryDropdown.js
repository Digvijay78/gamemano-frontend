"use client";
import Loading from "@/utils/Loading";
import { useEffect, useState } from "react";

export default function CategoryDropdown({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const handleChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Select a Category:
      </label>

   {categories.length === 0 ? (

    <Loading message = "Loading Categories..." />
   ) : (

<select
        value={selectedCategory}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">-- Choose a Category --</option>
        {categories.map((category) => (
  <option key={category.slug || category} value={category.slug || category}>
    {String(category.name || category).replace(/-/g, " ").toUpperCase()}
  </option>
))}
      </select>
   ) }

      
    </div>
  );
}
