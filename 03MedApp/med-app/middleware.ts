import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;

  const isLoginPage = request.nextUrl.pathname === "/login";
  const isProtectedRoute = request.nextUrl.pathname.startsWith("/app");

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/app/home", request.url));
  }

  return NextResponse.next();
}
