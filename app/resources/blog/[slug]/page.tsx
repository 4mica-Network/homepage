import { redirect } from 'next/navigation';

const legacySlugMap: Record<string, string> = {
  '1': 'how-4mica-works',
};

type BlogSlugPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogSlugPage({ params }: BlogSlugPageProps) {
  const normalizedSlug = legacySlugMap[params.slug];

  if (normalizedSlug) {
    redirect(`/resources/blog/${normalizedSlug}`);
  }

  redirect('/resources/blog');
}
