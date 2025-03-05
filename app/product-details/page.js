import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProductDetails() {
  return (
    <ProtectedRoute>
      <div>
        <h1 className="text-2xl font-bold">Product Details</h1>
        <p>This is a protected page.</p>
      </div>
    </ProtectedRoute>
  );
}
