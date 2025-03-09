"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, Link } from "lucide-react"; // Importing a back arrow icon
import Loading from "@/utils/Loading";
import { Search, Bell, User, Star, Heart, ShoppingCart, ChevronLeft } from "lucide-react"

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const { slug } = useParams();
  const router = useRouter(); // Get router instance
  const [quantity, setQuantity] = useState(1)
  const [inWishlist, setInWishlist] = useState(false)


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${slug}`);
        const data = await res.json();
        setProduct(data);
        setSelectedImage(0)
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [slug]);

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating - fullStars >= 0.5

    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < fullStars
                ? "text-amber-500 fill-amber-500"
                : i === fullStars && hasHalfStar
                  ? "text-amber-500 fill-amber-500 half-star"
                  : "text-gray-400"
            }`}
          />
        ))}
        <span className="ml-2 text-white">{rating.toFixed(1)}</span>
      </div>
    )
  }


  const toggleWishlist = () => {
    setInWishlist(!inWishlist)
  }

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(10, quantity + value))
    setQuantity(newQuantity)
  }

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
        <>
     {
       !product ? (
         <Loading message = "Loading Product Details...." />
        ) : (
          
          
    <div className="max-w-6xl mx-auto bg-black shadow-lg rounded-lg overflow-hidden p-6 mt-10  relative">
        {/* Back Button */}
        <button
        className="flex items-center text-gray-700 hover:text-gray-900 absolute top-4 left-4"
        onClick={() => router.back()} // Go to previous page
        >
        <ArrowLeft className="w-5 h-5 mr-2 bg-white" />
        <span className="bg-white" >Back</span>
        </button>
        
        <div className="py-6 px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Product Images */}
              <div>
                <div className="bg-[#1e1e1e] rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.images[selectedImage] || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                {/* Image Thumbnails */}
                <div className="overflow-auto">
                  <div className="flex gap-4 [&_img]:shrink-0">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`border-2 rounded-lg overflow-hidden ${
                          selectedImage === index ? "border-amber-500" : "border-transparent"
                        }`}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${product.title} - view ${index + 1}`}
                          className="w-20 h-20 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <div className="mb-2">
                  <span className="inline-block bg-[#2a2a2a] text-amber-500 px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                  <span className="inline-block bg-[#2a2a2a] text-white px-3 py-1 rounded-full text-sm ml-2">
                    {product.brand}
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-white mb-4">{product.title}</h1>

                <div className="mb-6">{renderRating(product.rating)}</div>

                <p className="text-gray-300 mb-8">{product.description}</p>

                <div className="flex items-baseline mb-8">
                  <span className="text-3xl font-bold text-white">${product.price}</span>
                  {product.discountPercentage > 0 && (
                    <>
                      <span className="text-lg text-gray-400 line-through ml-3">
                        ${Math.round(product.price / (1 - product.discountPercentage / 100))}
                      </span>
                      <span className="ml-3 bg-amber-500 text-black px-2 py-1 rounded-md text-sm font-bold">
                        {Math.round(product.discountPercentage)}% OFF
                      </span>
                    </>
                  )}
                </div>

                {/* Quantity Selector */}
                <div className="mb-8">
                  <label className="block text-white mb-2">Quantity</label>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="bg-[#2a2a2a] text-white w-10 h-10 flex items-center justify-center rounded-l-lg"
                    >
                      -
                    </button>
                    <div className="bg-[#1e1e1e] text-white w-16 h-10 flex items-center justify-center border-x border-[#2a2a2a]">
                      {quantity}
                    </div>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="bg-[#2a2a2a] text-white w-10 h-10 flex items-center justify-center rounded-r-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-amber-500 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                  <button
                    onClick={toggleWishlist}
                    className={`flex-1 py-3 px-6 rounded-lg flex items-center justify-center transition-colors ${
                      inWishlist ? "bg-red-500 text-white" : "bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]"
                    }`}
                  >
                    <Heart className={`h-5 w-5 mr-2 ${inWishlist ? "fill-white" : ""}`} />
                    {inWishlist ? "In Wishlist" : "Add to Wishlist"}
                  </button>
                </div>

                {/* Stock Info */}
                <div className="mt-8 p-4 bg-[#1e1e1e] rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Availability:</span>
                    <span className={product.stock > 0 ? "text-green-500" : "text-red-500"}>
                      {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                  {product.stock > 0 && (
                    <div className="mt-2 w-full bg-[#2a2a2a] rounded-full h-2.5">
                      <div
                        className="bg-amber-500 h-2.5 rounded-full"
                        style={{ width: `${Math.min(100, (product.stock / 100) * 100)}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Related Products Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-amber-500 mb-6 font-mono tracking-wider">RELATED GAMES</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="bg-[#f5e9c6] rounded-lg overflow-hidden">
                    <div className="p-2">
                      <span className="text-xs bg-gray-800 text-white px-2 py-0.5 rounded">Best Seller</span>
                    </div>
                    <div className="p-4 pt-16">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Related Game {index + 1}</h3>
                      <div className="flex flex-wrap gap-1 mb-2">
                        <span className="text-xs text-gray-700">RPG</span>
                        <span className="text-xs text-gray-700"> • Action</span>
                        <span className="text-xs text-gray-700"> • Adventure</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-4">Released 10th August 2022</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900">$48</span>
                        <Link
                          href="/buy-now"
                          className="px-4 py-1 bg-amber-500 text-black text-sm font-medium rounded-full"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>



          </div>
        )
      }
      </>
        );
}
