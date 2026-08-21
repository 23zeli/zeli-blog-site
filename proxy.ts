import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

//Some common scenarios where Proxy is effective include:

//Modifying headers for all pages or a subset of pages
//Rewriting to different pages based on A/B test or experiments
//Programmatic redirects based on incoming request properties

// authentication?

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
