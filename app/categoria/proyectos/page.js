import { performRequest } from "@/lib/datocms";
import Header from "@/components/header";
import GridImages from "@/components/GridImages/GridImages";
import NavCategories from "@/components/NavCategories/nav-categories";

function getPageRequest() {
  const PAGE_CONTENT_QUERY = `
    {
      allGaleriaImatges(filter: {categoria: {eq: 173632921}}, first: 120, orderBy: _createdAt_DESC){
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

export async function generateMetadata({ params }) {
  const { slug } = params;
  return {
    title: `Proyectos | Barbero Tattoo`,
    description: "Página web dedicada al trabajo de Rubén Barbero (barbero tattoo), donde encontrar sus tatuajes y diseños, viajes, ideas y convenciones",
  };
}

export default async function Page({ params }) {
  const { slug } = params; // Get dynamic slug from the URL
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);

  return (
    <>
      <Header />
      <NavCategories data={ data.allCategoriaImatges} />
      <GridImages data={data.allGaleriaImatges} />
    </>
  );
}
