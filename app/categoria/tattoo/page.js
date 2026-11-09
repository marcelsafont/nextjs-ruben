import { performRequest } from "@/lib/datocms";
import Header from "@/components/header";
import GridImages from "@/components/GridImages/GridImages";
import NavCategories from "@/components/NavCategories/nav-categories";
import PageHeading from "@/components/PageHeading/PageHeading";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/business-jsonld";

const CATEGORY_ID = 173632922;

function getPageRequest() {
  const PAGE_CONTENT_QUERY = `
    {
      allGaleriaImatges(filter: {categoria: {eq: ${CATEGORY_ID}}}, first: 120, orderBy: _createdAt_DESC){
        titol
        id
        imatge {
          url
        }
      }
      allCategoriaImatges(first: "120"){
        id
        titol
        imatge{
            url
        }
      }
    }
  `;
  return { query: PAGE_CONTENT_QUERY };
}

export async function generateMetadata() {
  return buildMetadata({
    title: 'Tattoo',
    description:
      'Galeria de tattoos de Barbero Tattoo en Barcelona: trabajos de tatuaje en blackwork, fino, color y otros estilos. Fotos de cada pieza realizada en el estudio.',
    path: '/categoria/tattoo',
    keywords: [
      'tattoo Barcelona',
      'fotos tatuajes Barcelona',
      'blackwork Barcelona',
      'estudio tatuajes Barcelona',
    ],
  });
}

export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);
  const jsonLd = buildBreadcrumbJsonLd([
    { name: 'Inicio', path: '/' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Tattoo', path: '/categoria/tattoo' },
  ]);

  return (
    <>
      <Header />
      <PageHeading
        title="Tattoo"
        intro="Tatuajes realizados por Barbero Tattoo: blackwork, fino, color y otros estilos, con fotos de cada pieza."
      />
      <NavCategories data={data.allCategoriaImatges} />
      <GridImages data={data.allGaleriaImatges} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
