import { NextResponse, type NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { isDevelopmentEnvironment } from './lib/constants';

export async function middleware(request: NextRequest) {
  // Check if the request is for the AI or chat pages   
  if (request.nextUrl.pathname.startsWith('/ai') || request.nextUrl.pathname.startsWith('/chat')) {
    // Get the token from the request
    const token = await getToken({
      req: request,
      secret: process.env.AUTH_SECRET,
      secureCookie: !isDevelopmentEnvironment,
    });

    // If no token, redirect to login
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // If token exists, allow the request to proceed
    return NextResponse.next();
  }
}; 

export const config = {
  matcher: [
    '/ai',
    '/chat/:id'],
};
