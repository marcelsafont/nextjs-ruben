import Header from "@/components/header";
import Faqs from "@/components/Faqs/Faqs";
import PageHeading from "@/components/PageHeading/PageHeading";
import { performRequest } from "@/lib/datocms";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/business-jsonld";

const PAGE_CONTENT_QUERY = `
  {
    faqPage{
      faqsItem{
        titol
        text
      }
    }
  }
`;

function getPageRequest() {
  return { query: PAGE_CONTENT_QUERY };
}

export async function generateMetadata() {
  return buildMetadata({
    title: 'FAQ',
    description:
      'Respuestas a las preguntas más habituales sobre tatuajes en Barcelona: precios, duración, cuidados, ages, reservas y qué llevar a tu primera cita.',
    path: '/faqs',
    keywords: [
      'FAQ tatuajes',
      'precio tatuaje Barcelona',
      'cuidados tatuaje',
      'reservar tatuaje Barcelona',
    ],
  });
}

export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);
  const jsonLd = buildBreadcrumbJsonLd([
    { name: 'Inicio', path: '/' },
    { name: 'FAQ', path: '/faqs' },
  ]);

  return (
    <>
      <Header />
      <PageHeading
        title="FAQ"
        intro="Las preguntas que más nos hacen antes de tu primer tatuaje: precios, duración, cuidados, reservas y cómo preparar la cita."
      />
      <Faqs data={data} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
