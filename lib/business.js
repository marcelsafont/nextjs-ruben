/**
 * Single source of truth for the business entity used by:
 *  - JSON-LD structured data (lib/business-jsonld.js)
 *  - contact links rendered in the UI
 *
 * TODO(owner): replace every "REPLACE_" placeholder with the real business data.
 * Google Search Console / rich-result validation will warn until these are filled in.
 */

export const SITE_URL = 'https://barberotattoo.com';

export const BUSINESS = {
  name: 'Barbero Tattoo',
  legalName: 'REPLACE_LEGAL_NAME',
  description:
    'Tatuador en Barcelona. Tatuajes personalizados, diseño propio y viajes por toda España.',
  telephone: '+34644103409',
  email: 'barberotattoos@gmail.com',
  url: SITE_URL,
  image: `${SITE_URL}/assets/images/og-image.jpeg`,
  currenciesAccepted: 'EUR',
  sameAs: [
    'https://www.instagram.com/barbero_tattoo/',
    'https://www.facebook.com/barberotattoo/',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+34644103409',
      contactType: 'customer service',
      email: 'barberotattoos@gmail.com',
      availableLanguage: ['es', 'ca', 'en'],
    },
  ],
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/barbero_tattoo/',
  facebook: 'https://www.facebook.com/barberotattoo/',
  whatsapp: 'https://wa.me/34644103409',
  email: 'mailto:barberotattoos@gmail.com',
};
