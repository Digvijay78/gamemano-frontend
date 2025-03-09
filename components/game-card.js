import Image from "next/image";
import Link from "next/link";

export default function GameCard({ title, tags, releaseDate, price, imageUrl }) {


  
  return (
    <div className="bg-[#f5e9c6] rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-40">
        <Image 
          src={imageUrl} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-lg"
        />
      </div>

      {/* Content Section */}
      <div className="p-2">
        <span className="text-xs bg-gray-800 text-white px-2 py-0.5 rounded">
          Best Seller
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs text-gray-700">
              {index > 0 && " • "}
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-600 mb-4">{releaseDate}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-900">{price}</span>
          <Link href="/product" className="px-4 py-1 bg-amber-500 text-black text-sm font-medium rounded-full">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
