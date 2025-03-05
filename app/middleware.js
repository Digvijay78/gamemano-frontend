import { NextResponse } from "next/server";

export function middleware(req) {
  const isLoggedIn = req.cookies.get("isLoggedIn")?.value === "true";
  const url = req.nextUrl;

  // If trying to access /product-details and not logged in → Redirect to login
  if (!isLoggedIn && url.pathname.startsWith("/product-details")) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("returnUrl", url.pathname); // Store return URL
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/product-details/:path*"], // Protect product-details route
};
