import { NextResponse } from "next/server";

export function middleware(request) {
    console.log("work")
}

export const config = { matcher: ["/admin/:path*", "/profile/:path*"] };
