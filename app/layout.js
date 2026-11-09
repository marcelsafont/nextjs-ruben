import { Raleway } from 'next/font/google';
import './globals.css';
import LinksFooter from '@/components/LinksFooter/LinksFooter';
import { BUSINESS, SITE_URL } from '@/lib/business';
import { buildBusinessJsonLd } from '@/lib/business-jsonld';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-raleway',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  // Titles are composed by lib/metadata.js#buildMetadata (which appends the
  // brand), so no title.template here — it would double up on subpages.
  title: {
    default: `${BUSINESS.name} | Barbero Tattoo. Tatuador en Barcelona`,
  },
  description: BUSINESS.description,
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Tatuador en Barcelona`,
    description: BUSINESS.description,
    images: [{ url: `${SITE_URL}/assets/images/og-image.jpeg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS.name} | Tatuador en Barcelona`,
    description: BUSINESS.description,
    images: [`${SITE_URL}/assets/images/og-image.jpeg`],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = buildBusinessJsonLd();

  return (
    <html lang="es" className={raleway.variable}>
      <body>
        <main>
          {children}
          <LinksFooter />
        </main>
        <script
          type="application/ld+json"
          // Content is a static object built from lib/business.js — no user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
