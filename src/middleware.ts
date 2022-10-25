// middleware.ts
import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { device } = userAgent(request);

  if (device.type !== "mobile" && request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/desktop", request.url));
  }

  // return NextResponse.redirect(new URL("/desktop", request.url));
}
