import { BUSINESS } from './business';

/**
 * Builds a JSON-LD graph for the business.
 *
 * `TattooParlor` is the schema.org type Google uses for tattoo studios
 * (it is a subtype of HealthAndBeautyBusiness -> LocalBusiness), so it is
 * more precise than a bare LocalBusiness for a "tatuador en Barcelona" query.
 *
 * Placeholders still live in lib/business.js — fill them in there.
 */
export function buildBusinessJsonLd() {
  const { address, geo, openingHoursSpecification, ...rest } = BUSINESS;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['TattooParlor', 'LocalBusiness'],
        '@id': `${BUSINESS.url}/#business`,
        name: BUSINESS.name,
        description: BUSINESS.description,
        url: BUSINESS.url,
        image: BUSINESS.image,
        logo: BUSINESS.image,
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        currenciesAccepted: BUSINESS.currenciesAccepted,
        sameAs: BUSINESS.sameAs,
        contactPoint: BUSINESS.contactPoint,
        areaServed: {
          '@type': 'City',
          name: 'Barcelona',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${BUSINESS.url}/#website`,
        url: BUSINESS.url,
        name: BUSINESS.name,
        description: BUSINESS.description,
        inLanguage: 'es',
        publisher: { '@id': `${BUSINESS.url}/#business` },
      },
    ],
  };
}

/**
 * BreadcrumbList for a given path, so service pages can expose a breadcrumb
 * trail to search engines.
 */
export function buildBreadcrumbJsonLd(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BUSINESS.url}${item.path}`,
    })),
  };
}
