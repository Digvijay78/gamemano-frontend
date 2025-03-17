"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CategoryDropdown from "@/components/AllProducts/CategoryDropdown";
import Products from "@/components/AllProducts/Products";
import PriceDropdown from "@/components/AllProducts/PriceDropDown";
import { getProducts } from "@/services/productService";

function ProductContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceSort, setPriceSort] = useState("");

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    setSelectedCategory(categoryFromUrl || "");
  }, [searchParams]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setProducts([]);
      try {
        const category = searchParams.get("category") || "";
        let data = await getProducts(category);
        data = data || [];

        if (priceSort === "lowToHigh") {
          data.sort((a, b) => a.price - b.price);
        } else if (priceSort === "highToLow") {
          data.sort((a, b) => b.price - a.price);
        } else if (priceSort === "above5") {
          data = data.filter((product) => product.price > 5);
        } else if (priceSort === "above10") {
          data = data.filter((product) => product.price > 10);
        }

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [searchParams, priceSort]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between mb-4">
        <CategoryDropdown onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
        <PriceDropdown onSelectPriceSort={setPriceSort} />
      </div>
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
