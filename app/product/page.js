"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CategoryDropdown from "@/components/AllProducts/CategoryDropdown";
import Products from "@/components/AllProducts/Products";
import { getProducts } from "@/services/productService";

function ProductContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get category from URL on page load
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    setSelectedCategory(categoryFromUrl || "");
  }, [searchParams]);

  // Fetch products when category changes
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setProducts([]); // Clear previous products before fetching

      try {
        const category = searchParams.get("category") || "";
        const data = await getProducts(category); // Use API call function
        setProducts(data || []); // Ensure products are always an array
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]); // Depend on searchParams to trigger re-fetch

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Category Dropdown */}
      <CategoryDropdown onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />

      {/* Pass fetched products to Products component */}
      <Products products={products} loading={loading} />
    </div>
  );
}

export default function Product() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductContent />
    </Suspense>
  );
}
