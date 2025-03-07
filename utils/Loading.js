"use client";

export default function Loading({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="w-10 h-10 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
      <p className="mt-2 text-gray-600 text-sm font-medium">{message}</p>
    </div>
  );
}
