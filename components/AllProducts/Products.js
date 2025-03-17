"use client";
import Loading from "@/utils/Loading";
import Pagination from "@/utils/Pagination";
import Link from "next/link";
import { useState } from "react";

export default function Products({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  
  const totalPages = Math.ceil(products.length / itemsPerPage);


  const validCurrentPage = Math.min(currentPage, totalPages);


  const startIndex = (validCurrentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {products?.length === 0 ? (
        <Loading message="Loading Products..." />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#FEF3BC]"
              >
           
                <div className="relative">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <span className="absolute top-2 left-2 bg-[#3D352A] text-white text-[10px] px-2 py-1 rounded-full">
                    {product.brand}
                  </span>
                </div>

                {/* Product Info */}
                <div className="mt-4">
                  <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
                  <p className="text-black text-sm line-clamp-2">{product.description}</p>

                  {/* Price & Buttons */}
                  <div className="flex items-center mt-4 gap-[13px]">
                    <span className="text-xl font-bold text-[#281E1F]">${product.price}</span>
                    <button className="bg-[#E58F28] text-white px-4 py-2 rounded-full transition w-full">
                      Buy Now
                    </button>
                  </div>

                  {/* View Details */}
                  <Link
                    href={`/product-details/${product.id}`}
                    className="block mt-3 text-[#E58F28] text-sm hover:underline w-full"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Component */}
          {totalPages > 1 && (
            <Pagination
              totalItems={products.length}
              itemsPerPage={itemsPerPage}
              currentPage={validCurrentPage}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </>
  );
}
