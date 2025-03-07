import Link from "next/link";

export default function ProductCard({ product }) {

  
  
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600 text-sm">{product.brand}</p>
      <p className="text-gray-500 text-sm truncate">{product.description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="font-bold text-lg text-blue-600">${product.price}</span>
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
      <Link
        href={`/product-details/${product.id}`}
        className="block mt-3 text-blue-600 text-sm hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
