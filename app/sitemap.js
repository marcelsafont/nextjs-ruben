import { performRequest } from '@/lib/datocms';
import { SITE_URL } from '@/lib/business';

export const revalidate = 3600;

const STATIC_ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/galeria', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/categoria/tattoo', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/categoria/proyectos', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/eventos', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/faqs', priority: 0.6, changeFrequency: 'monthly' },
];

const GALLERY_QUERY = `
  {
    allGaleriaImatges(first: 500, orderBy: _createdAt_DESC){
      id
      titol
      _updatedAt
    }
  }
`;

/**
 * Detail URLs are built exactly like components/GridImages/GridImages.js does:
 * `<titulo-slug>=<datoCMS id>` (URL-encoded when emitted).
 */
function buildDetailPath(item) {
  const slug = `${item.titol.trim().toLowerCase().replace(/\s+/g, '-')}=${item.id}`;
  return `/galeria/item/${encodeURIComponent(slug)}`;
}

export default async function sitemap() {
  const entries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  try {
    const data = await performRequest({ query: GALLERY_QUERY });
    const items = data?.allGaleriaImatges || [];

    for (const item of items) {
      entries.push({
        url: `${SITE_URL}${buildDetailPath(item)}`,
        lastModified: item._updatedAt ? new Date(item._updatedAt) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      });
    }
  } catch (error) {
    // A failing CMS must not break the build; the static routes are still valid.
    console.error('sitemap: could not fetch gallery entries', error);
  }

  return entries;
}
