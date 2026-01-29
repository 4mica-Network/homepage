'use client';

import { useEffect } from 'react';
import Link from 'next/link';

const TARGET_PATH = '/resources/blog/getting-paid-by-4mica';

export default function LegacyBlogRedirect() {
  useEffect(() => {
    window.location.replace(TARGET_PATH);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold">Redirecting...</h1>
        <p className="mt-3 text-sm opacity-70">
          If you are not redirected, use the link below.
        </p>
        <Link className="mt-4 inline-block underline" href={TARGET_PATH}>
          Go to the article
        </Link>
      </div>
    </main>
  );
}
