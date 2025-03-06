import { NextResponse } from "next/server";

export function middleware(req) {
  // Log all cookies for debugging
  const accessToken = req.cookies.get("accessToken")?.value;
  
  console.log("Access Token:", accessToken);

  if (!accessToken) {
    const url = new URL("/login", req.nextUrl.origin); // Use req.nextUrl.origin as the base
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/product-details/:path*", "/product"], // Supports dynamic routes like /product-details/1
};
