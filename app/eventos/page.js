import GridEvents from "@/components/GridEvents/GridEvents";
import Header from "@/components/header";
import PageHeading from "@/components/PageHeading/PageHeading";
import { performRequest } from "@/lib/datocms";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/business-jsonld";

const PAGE_CONTENT_QUERY = `
  {
    allEsdeveniments{
      id
      titol
      ciutat{
        id
        nom
      }
      imatge{
        url
      }
    }
  }
`;

function getPageRequest() {
  return { query: PAGE_CONTENT_QUERY };
}

export async function generateMetadata() {
  return buildMetadata({
    title: 'Eventos y viajes',
    description:
      'Próximos viajes y eventos de Barbero Tattoo: fechas y ciudades donde puedes encontrar el estudio fuera de Barcelona. Consulta dónde estará el tattoo studio ahora.',
    path: '/eventos',
    keywords: [
      'eventos tattoo Barcelona',
      'viajes tatuajes',
      'guest tattoo Barcelona',
    ],
  });
}

export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);
  const jsonLd = buildBreadcrumbJsonLd([
    { name: 'Inicio', path: '/' },
    { name: 'Eventos', path: '/eventos' },
  ]);

  return (
    <>
      <Header />
      <PageHeading
        title="Eventos y viajes"
        intro="Dónde puedes encontrar el estudio fuera de Barcelona: próximas fechas, ciudades y eventos donde estará Barbero Tattoo."
      />
      <GridEvents data={data} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
