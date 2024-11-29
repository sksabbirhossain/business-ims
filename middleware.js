import { NextResponse } from "next/server";
import { auth } from "./utils/authOptions";

export async function middleware(request) {
  const { nextUrl } = request;
  const session = await auth();
  const isAuthenticated = !!session?.user;

  const isPublic =
    nextUrl.pathname === "/" || nextUrl.pathname.endsWith("/superadmin/login");

  if (isAuthenticated === false && !isPublic) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  const isAdmin = nextUrl.pathname.startsWith("/admin");

  if (
    isAuthenticated &&
    !isPublic &&
    isAdmin &&
    session?.user?.role !== "storeAdmin"
  ) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  const isSuperAdmin = nextUrl.pathname.startsWith("/superadmin");

  if (
    isAuthenticated &&
    !isPublic &&
    isSuperAdmin &&
    session?.user?.role !== "superadmin"
  ) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }
}

export const config = { matcher: ["/admin/:path*", "/superadmin/:path*"] };
