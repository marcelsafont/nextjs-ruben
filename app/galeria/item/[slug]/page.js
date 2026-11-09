import DetailProject from "@/components/DetailProject/DetailProjectV1";
import Header from "@/components/header";
import { performRequest } from "@/lib/datocms";
import { notFound } from 'next/navigation';
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/business-jsonld";

/**
 * The slug is built by GridImages as `<titulo-slug>=<datoCMS id>`, and arrives
 * URL-encoded, so the separator shows up as `%3D`. Keep this parsing in sync
 * with components/GridImages/GridImages.js.
 */
function extractId(slug) {
  const [title, id] = decodeURIComponent(slug).split('=');
  return { title, id };
}

function getPageRequest(id) {
  const PAGE_CONTENT_QUERY = `
{
   galeriaImatge(filter: {id: {eq: "${id}"}}) {
      titol
      imatge{
        url
      }
   }
}
`;
  return { query: PAGE_CONTENT_QUERY };
}

export async function generateMetadata({ params }) {
  const { id } = extractId(params.slug);
  const pageRequest = getPageRequest(id);
  const data = await performRequest(pageRequest);

  if (!data?.galeriaImatge) {
    return buildMetadata({
      title: 'Tattoo no encontrado',
      description: 'El tattoo solicitado no está disponible.',
      path: `/galeria/item/${params.slug}`,
      noIndex: true,
    });
  }

  const { titol } = data.galeriaImatge;

  return buildMetadata({
    title: titol,
    description: `${titol}: tattoo realizado por Barbero Tattoo en Barcelona. Tatuajes personalizados en el estudio de Rubén Barbero.`,
    path: `/galeria/item/${params.slug}`,
    image: data.galeriaImatge.imatge?.url,
    type: 'article',
    keywords: [titol, `tattoo ${titol}`, 'tatuajes Barcelona'],
  });
}

export default async function Page({ params }) {
  const { id } = extractId(params.slug);
  const pageRequest = getPageRequest(id);
  const data = await performRequest(pageRequest);

  if (!data?.galeriaImatge) {
    notFound();
  }

  const jsonLd = buildBreadcrumbJsonLd([
    { name: 'Inicio', path: '/' },
    { name: 'Galería', path: '/galeria' },
    { name: data.galeriaImatge.titol, path: `/galeria/item/${params.slug}` },
  ]);

  return (
    <>
      <Header />
      <DetailProject data={data.galeriaImatge} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
