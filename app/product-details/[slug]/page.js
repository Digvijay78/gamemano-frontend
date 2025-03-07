"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react"; // Importing a back arrow icon
import Loading from "@/utils/Loading";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { slug } = useParams();
  const router = useRouter(); // Get router instance

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${slug}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
        <>
     {
       !product ? (
         <Loading message = "Loading Product Details...." />
        ) : (
          
          
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 mt-10 relative">
        {/* Back Button */}
        <button
        className="flex items-center text-gray-700 hover:text-gray-900 absolute top-4 left-4"
        onClick={() => router.back()} // Go to previous page
        >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span>Back</span>
        </button>
        
        {/* Product Header */}
        <div className="flex flex-col md:flex-row items-center mt-6">
        {/* Product Image */}
        <img
        src={product.thumbnail}
        alt={product.title}
        className="w-60 h-60 object-cover rounded-lg shadow-md"
        />
        
        {/* Product Info */}
        <div className="md:ml-6 flex-1">
        <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-gray-600">{product.brand} • {product.category}</p>
        <p className="text-sm text-gray-500 mt-2">{product.description}</p>
        
        {/* Pricing & Stock Info */}
        <div className="mt-4 flex items-center space-x-4">
        <span className="text-xl font-bold text-blue-600">${product.price}</span>
        <span className="text-red-500 text-sm line-through">
        ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
        </span>
        <span className="bg-green-200 text-green-700 px-2 py-1 text-xs rounded">
        {product.discountPercentage}% OFF
        </span>
        </div>
        
        <div className="mt-2 text-sm">
        <span
        className={`px-3 py-1 rounded-lg text-white ${
          product.stock > 0 ? "bg-yellow-500" : "bg-red-500"
        }`}
        >
          {product.availabilityStatus}
          </span>
          <span className="ml-2 text-gray-500">({product.stock} in stock)</span>
          </div>
          
          <div className="mt-2 flex items-center">
          <span className="text-yellow-500 text-lg">⭐ {product.rating}</span>
          <span className="text-gray-500 text-sm ml-2">
          ({product?.reviews?.length} reviews)
          </span>
          </div>
          </div>
          </div>
          
          {/* Additional Details */}
          <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-semibold">📦 Shipping:</p>
          <p className="text-gray-600 text-sm">{product.shippingInformation}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-semibold">🔄 Return Policy:</p>
          <p className="text-gray-600 text-sm">{product.returnPolicy}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-semibold">🛡 Warranty:</p>
          <p className="text-gray-600 text-sm">{product.warrantyInformation}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-semibold">📏 Dimensions:</p>
          <p className="text-gray-600 text-sm">
          {product?.dimensions?.width} x {product?.dimensions?.height} x {product?.dimensions?.depth} cm
          </p>
          </div>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-6 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 flex-1">
          Add to Cart 🛒
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 flex-1">
          Buy Now 💳
          </button>
          </div>
          </div>
        )
      }
      </>
        );
}
