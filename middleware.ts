import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

/**
 * Middleware to protect admin routes
 *
 * This middleware runs before every request and checks if the user is authenticated
 * for protected routes (anything under /admin/* except /admin/login)
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // List of paths that don't require authentication
  const publicPaths = [
    '/admin/login',
    '/api/auth',
  ]

  // Check if the current path is public
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path))

  // If it's a public path, allow access
  if (isPublicPath) {
    return NextResponse.next()
  }

  // For protected admin routes, check authentication
  if (pathname.startsWith('/admin')) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })

    // If no valid token, redirect to login
    if (!token) {
      const loginUrl = new URL('/admin/login', request.url)
      loginUrl.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // For protected API routes (admin APIs), check authentication
  if (pathname.startsWith('/api/admin') || pathname.startsWith('/api/ai')) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })

    // If no valid token, return 401 Unauthorized
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized - Please log in' },
        { status: 401 }
      )
    }
  }

  return NextResponse.next()
}

/**
 * Matcher configuration
 * Specify which routes this middleware should run on
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
