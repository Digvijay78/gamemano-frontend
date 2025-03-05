"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/utils/auth";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      setAuthChecked(true);
    }
  }, []);

  if (!authChecked) return null; // Avoid rendering until auth check is complete

  return <>{children}</>;
}
