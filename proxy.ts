import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function proxy(request: NextRequest) {
    // Redirect requests to /admin to the home page
    if (request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

  return NextResponse.next();
}

export const config = {
    matcher: "/about/:path*",
};
