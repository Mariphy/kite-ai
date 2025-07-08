import { NextResponse, type NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { guestRegex, isDevelopmentEnvironment } from './lib/constants';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /*
   * Playwright starts the dev server and requires a 200 status to
   * begin the tests, so this ensures that the tests can start
   */
  if (pathname.startsWith('/ping')) {
    return new Response('pong', { status: 200 });
  }

  const publicPaths = ['/', '/about', '/resources', '/login', '/register'];
  const isPublicRoute = publicPaths.includes(pathname) || pathname.startsWith('/api/auth');

  if (isPublicRoute) return NextResponse.next();

  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
    secureCookie: !isDevelopmentEnvironment,
  });
  console.log('TOKEN:', token);

  const isProtectedRoute = pathname.startsWith('/ai');

  if (!token && isProtectedRoute) {
    const redirectUrl = encodeURIComponent(request.url);
    return NextResponse.redirect(new URL(`/api/auth/guest?redirectUrl=${redirectUrl}`, request.url));
  }

  const isGuest = guestRegex.test(token?.email ?? '');

  // Block guests from accessing /ai route
  if (isGuest && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (token && !isGuest && ['/login', '/register'].includes(pathname)) {
    return NextResponse.redirect(new URL('/ai', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/chat/:id',
    '/api/:path*',
    '/login',
    '/register',
    '/ai/:path*'
  ],
};
