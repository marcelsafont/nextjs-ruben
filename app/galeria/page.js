import Header from "@/components/header";
import Images from "@/components/Images/Images";
import PageHeading from "@/components/PageHeading/PageHeading";
import { performRequest } from "@/lib/datocms";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/business-jsonld";

const PAGE_CONTENT_QUERY = `
  {
    allCategoriaImatges{
      id
      titol
      imatge{
        responsiveImage{
          src
        }
      }
    }
  }
`;

function getPageRequest() {
  return { query: PAGE_CONTENT_QUERY };
}

export async function generateMetadata() {
  return buildMetadata({
    title: 'Galería de tatuajes',
    description:
      'Galería de tattoos y proyectos realizados por Barbero Tattoo en Barcelona. Fotos de tatuajes personalizados, diseño previo y resultado final.',
    path: '/galeria',
    keywords: [
      'galería tatuajes Barcelona',
      'fotos tatuajes',
      'tatuajes personalizados Barcelona',
    ],
  });
}

export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);
  const jsonLd = buildBreadcrumbJsonLd([
    { name: 'Inicio', path: '/' },
    { name: 'Galería', path: '/galeria' },
  ]);

  return (
    <>
      <Header />
      <PageHeading
        title="Galería de tatuajes"
        intro="Tatuajes y proyectos realizados en el estudio de Barcelona. Elige una categoría o abre una pieza para ver el detalle."
      />
      <Images data={data} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
