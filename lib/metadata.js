import { BUSINESS, SITE_URL } from './business';

export const DEFAULT_OG_IMAGE = '/assets/images/og-image.jpeg';

/**
 * Builds a Next.js Metadata object with canonical URL, Open Graph and Twitter
 * cards filled in consistently.
 *
 * Every page must pass a unique `description`: the previous implementation
 * reused one identical sentence across all routes, which reads as duplicate
 * content to crawlers.
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  keywords = [],
  noIndex = false,
}) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  // The root layout's title.template does not apply to page-level metadata in
  // Next 13, so the suffix is added here to keep every title consistent.
  const fullTitle = title.includes(BUSINESS.name) ? title : `${title} | ${BUSINESS.name}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
        },
    openGraph: {
      type,
      url,
      siteName: BUSINESS.name,
      title: fullTitle,
      description,
      locale: 'es_ES',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${BUSINESS.name} — ${description}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
