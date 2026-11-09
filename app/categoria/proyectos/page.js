import { performRequest } from "@/lib/datocms";
import Header from "@/components/header";
import GridImages from "@/components/GridImages/GridImages";
import NavCategories from "@/components/NavCategories/nav-categories";
import PageHeading from "@/components/PageHeading/PageHeading";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbJsonLd } from "@/lib/business-jsonld";

const CATEGORY_ID = 173632921;

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
    title: 'Proyectos',
    description:
      'Proyectos de tatuaje de Barbero Tattoo en Barcelona: diseños personalizados en distintas zonas y estilos. Galeria de proyectos con fotos y detalle de cada tattoo.',
    path: '/categoria/proyectos',
    keywords: [
      'proyectos tatuajes Barcelona',
      'tatuajes personalizados',
      'diseño tatuaje Barcelona',
    ],
  });
}

export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);
  const jsonLd = buildBreadcrumbJsonLd([
    { name: 'Inicio', path: '/' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Proyectos', path: '/categoria/proyectos' },
  ]);

  return (
    <>
      <Header />
      <PageHeading
        title="Proyectos"
        intro="Proyectos de tatuaje en distintas zonas y estilos: el diseño, su desarrollo y el resultado final."
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
