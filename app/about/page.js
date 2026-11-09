import Header from "@/components/header";
import InfoCols from "@/components/InfoCols/info-cols";
import PageHeading from "@/components/PageHeading/PageHeading";
import { performRequest } from "@/lib/datocms";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/business-jsonld";

const PAGE_CONTENT_QUERY = `
  {
    info{
      columnes{
        text
        imatge{
          url
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
    title: '+ Info',
    description:
      'Conoce a Barbero Tattoo: quién es, cómo trabaja y cómo conseguir cita para tu próximo tatuaje en Barcelona. Contacto, horarios y zonas de trabajo.',
    path: '/about',
    keywords: [
      'barbero tattoo Barcelona',
      'info Barbero Tattoo',
      'pedir cita tatuaje Barcelona',
    ],
  });
}

export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);
  const jsonLd = buildBreadcrumbJsonLd([
    { name: 'Inicio', path: '/' },
    { name: '+ Info', path: '/about' },
  ]);

  return (
    <>
      <Header />
      <PageHeading
        title="+ Info"
        intro="Quién es Barbero Tattoo, cómo se trabaja en el estudio y cómo conseguir cita para tu próximo tatuaje en Barcelona."
      />
      <InfoCols data={data} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
