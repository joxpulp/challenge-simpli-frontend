import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
/**
 * @param req
 */
export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (url.pathname === '/') {
    url.pathname = '/motorcycles';
    url.searchParams.set('page', '1');
    url.searchParams.set('limit', '8');
    return NextResponse.redirect(url);
  }

  if (url.pathname.startsWith('/motorcycles') && !url.pathname.includes('/motorcycles/') && (!url.searchParams.has('page') || !url.searchParams.has('limit'))) {
    url.searchParams.set('page', '1');
    url.searchParams.set('limit', '8');
    return NextResponse.redirect(url);
  }

  if (url.pathname.startsWith('/accessories') && !url.pathname.includes('/accessories/') && (!url.searchParams.has('page') || !url.searchParams.has('limit'))) {
    url.searchParams.set('page', '1');
    url.searchParams.set('limit', '8');
    return NextResponse.redirect(url);
  }

  if (url.pathname.startsWith('/motorcycles') && !url.pathname.includes('/motorcycles/') && (!url.searchParams.get('page') || !url.searchParams.get('limit'))) {
    url.searchParams.set('page', '1');
    url.searchParams.set('limit', '8');
    return NextResponse.redirect(url);
  }

  if (url.pathname.startsWith('/accessories') && !url.pathname.includes('/accessories/') && (!url.searchParams.get('page') || !url.searchParams.get('limit'))) {
    url.searchParams.set('page', '1');
    url.searchParams.set('limit', '8');
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /_next (Next.js internals)
     */
    '/((?!_next).*)'
  ]
};
