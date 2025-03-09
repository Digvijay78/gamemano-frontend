import Link from "next/link";
import { Star } from "lucide-react";

export default function GameDetail({ title, releaseDate, description }) {
  return (
    <section className="py-16 px-8 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <p className="text-xs text-gray-500 mb-6">{releaseDate}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 mb-8">{description}</p>

            <div className="flex gap-4">
              <Link href="/play-now" className="px-6 py-3 bg-amber-500 text-black font-bold rounded-full">
                Play Now
              </Link>

              <div>
                <div className="text-sm text-white mb-1">Available on:</div>
                <div className="flex gap-2">
                  <span className="flex items-center text-white">
                    <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5.5L10.5 3L21 5.5V18.5L10.5 21L3 18.5V5.5Z" stroke="white" strokeWidth="1.5" />
                      <path d="M10.5 3V21" stroke="white" strokeWidth="1.5" />
                      <path d="M16 7L16 19" stroke="white" strokeWidth="1.5" />
                    </svg>
                    iOS
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Link href="/buy" className="text-sm text-gray-400">
                Buy now for $40 only
              </Link>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-end gap-2 text-xs text-green-500 mb-2">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              All of your friends are playing
            </div>
            <div className="flex justify-end">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${star <= 3 ? "text-amber-500" : "text-gray-600"}`}
                  fill={star <= 3 ? "currentColor" : "none"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
