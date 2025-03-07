"use client";
import Loading from "@/utils/Loading";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Products({ category }) {
  const [products, setProducts] = useState([]);

  console.log("SELECTRED", category);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "https://dummyjson.com/products";
        if (category) {
          url = `https://dummyjson.com/products/category/${category}`;
        }
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  const router = useRouter();
const handleClick = () => {
  router.push(`/product-details/${product.id}`);
};

  return (
    <>
      {products?.length === 0 ? (
        <Loading message="Loading Products..." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
                  {product.brand}
                </span>
              </div>

              {/* Product Info */}
              <div className="mt-4">
                <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>

                {/* Price & Buttons */}
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-bold text-blue-600">${product.price}</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>

                {/* View Details */}
                <Link
                  href={`/product-details/${product.id}`}
                  className="block mt-3 text-blue-500 text-sm hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
