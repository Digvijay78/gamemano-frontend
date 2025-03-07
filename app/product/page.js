"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CategoryDropdown from "@/components/AllProducts/CategoryDropdown";
import Products from "@/components/AllProducts/Products";

export default function Product() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get category from URL on page load
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    setSelectedCategory(categoryFromUrl || ""); // Ensure state is updated
  }, [searchParams]);

  // Fetch products when category changes
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category"); // Get latest category

    const fetchProducts = async () => {
      setLoading(true);
      setProducts([]); // Clear previous products before fetching

      try {
        let url = categoryFromUrl
          ? `https://dummyjson.com/products/category/${categoryFromUrl}`
          : "https://dummyjson.com/products"; // Use correct API

        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]); // Depend on searchParams instead of selectedCategory

  console.log("products", products);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold">Product List</h1>

      {/* Category Dropdown */}
      <CategoryDropdown onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />

      {/* Pass fetched products to Products component */}
      <Products products={products} loading={loading} />
    </div>
  );
}
