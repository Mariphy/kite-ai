import { NextResponse, type NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { isDevelopmentEnvironment } from './lib/constants';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /*
   * Playwright starts the dev server and requires a 200 status to
   * begin the tests, so this ensures that the tests can start
   */
  if (pathname.startsWith('/ping')) {
    return new Response('pong', { status: 200 });
  }

  // Define public paths that don't require authentication
  const publicPaths = ['/', '/about', '/resources', '/login', '/register'];
  const isPublicRoute = publicPaths.includes(pathname) || pathname.startsWith('/api/auth');

   // Allow public routes to pass through without token check
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Get authentication token
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
    secureCookie: !isDevelopmentEnvironment,
  });

  if (!token) {
    const redirectUrl = encodeURIComponent(request.url);
    return NextResponse.redirect(new URL(`/login?redirect=${redirectUrl}`, request.url));
  }
  console.log('Middleware token:', token?.email);

  // Redirect authenticated users away from auth pages
  if (token && ['/login', '/register'].includes(pathname)) {
    return NextResponse.redirect(new URL('/ai', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/ai',
    '/chat/:id',
    '/api/:path*',
    '/login',
    '/register',
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (NextAuth.js routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     * - animations (public animations)
     * - files with extensions (static assets)
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico|images|animations|.*\\.).*)',
  ],
};
