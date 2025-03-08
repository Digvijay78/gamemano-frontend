"use client";
import { useState } from "react";

export default function Pagination({ totalItems, itemsPerPage = 10, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null; // No pagination needed if only 1 page

  return (
    <div className="flex justify-center mt-6 space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-[#E5B981] cursor-not-allowed" : "bg-[#E58F28] hover:bg-[#D29F6E] text-white cursor-pointer"}`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 cursor-pointer rounded-md ${currentPage === index + 1 ? "bg-[#E58F28] text-white" : "bg-[#C48A5A] hover:bg-[#D29F6E] cursor-pointer"}`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4  py-2 rounded-md ${currentPage === totalPages ? "bg-[#E5B981] cursor-not-allowed" : "bg-[#C48A5A] hover:bg-[#D29F6E] text-white cursor-pointer"}`}
      >
        Next
      </button>
    </div>
  );
}
