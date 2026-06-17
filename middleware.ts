import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { JWT } from "next-auth/jwt";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token as JWT & { role?: string };
    const pathname = req.nextUrl.pathname;

    // Admin-only routes
    const adminRoutes = ["/admin", "/admin/all-requests"];
    const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route));

    // Employee-only routes
    const employeeRoutes = ["/employee", "/employee/apply", "/employee/leaves"];
    const isEmployeeRoute = employeeRoutes.some((route) => pathname.startsWith(route));

    // Check admin access
    if (isAdminRoute && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/employee", req.url));
    }

    // Check employee access (any authenticated user can access)
    if (isEmployeeRoute && !token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/auth/login",
    },
    callbacks: {
      authorized: ({ token }) => {
        // Only allow authenticated users
        return !!token;
      },
    },
  }
);

// Configure which routes to protect with middleware
export const config = {
  matcher: [
    "/admin/:path*",
    "/employee/:path*",
    "/dashboard/:path*",
    "/demo/:path*",
  ],
};
