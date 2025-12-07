import { NextResponse } from 'next/server';
import type { NextRequest, ProxyConfig } from 'next/server';

const legacyBlogSlugs: Record<string, string> = {
  '1': 'how-4mica-works',
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/resources/blog/')) {
    const parts = pathname.split('/').filter(Boolean); // ['resources', 'blog', '1']

    if (parts.length === 3) {
      const legacy = legacyBlogSlugs[parts[2]];

      if (legacy) {
        const url = request.nextUrl.clone();
        url.pathname = `/resources/blog/${legacy}`;
        return NextResponse.redirect(url, 308);
      }
    }
  }

  return NextResponse.next();
}

export const config: ProxyConfig = {
  matcher: ['/resources/blog/:slug*'],
};
