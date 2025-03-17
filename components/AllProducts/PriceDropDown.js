"use client";

export default function PriceDropdown({ onSelectPriceSort }) {
  return (

      <select
        className="border border-white text-white bg-transparent p-2 rounded"
        onChange={(e) => onSelectPriceSort(e.target.value)}
      >
        <option value="">Sort by Price</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
        <option value="above5">Above $5</option>
        <option value="above10">Above $10</option>
      </select>
  
  );
}
