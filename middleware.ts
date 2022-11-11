// middleware.ts
import { NextResponse, userAgent } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { device } = userAgent(request);

  const { locale } = request.nextUrl;

  if (device.type !== 'mobile' && request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL(`${locale}/desktop`, request.url));
  }

  return NextResponse.next();
}
