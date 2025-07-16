import { performRequest } from "@/lib/datocms";
import Header from "@/components/header";
import GridImages from "@/components/GridImages/GridImages";
import NavCategories from "@/components/NavCategories/nav-categories";

function getPageRequest(slug) {
  const PAGE_CONTENT_QUERY = `
    {
      allGaleriaImatges(filter: {categoria: {eq: "${slug}"}}, first: 120, orderBy: _createdAt_DESC){
        titol
        id
        imatge {
          url
        }
      }
      allCategoriaImatges(first: 120){
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

// Add this function to statically generate all category pages
export async function generateStaticParams() {
  const query = `
    {
      allCategoriaImatges(first: 120) {
        id
        titol
      }
    }
  `;
  const data = await performRequest({ query });
  return data.allCategoriaImatges.map(cat => ({
    slug: `${encodeURI(cat.titol).toLowerCase()}%3D${cat.id}`,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const titol = slug.split('%3D');
  return {
    title: `${titol[0].toUpperCase()} | Barbero Tattoo`,
    description: "Página web dedicada al trabajo de Rubén Barbero (barbero tattoo), donde encontrar sus tatuajes y diseños, viajes, ideas y convenciones",
  };
}

export default async function Page({ params }) {
  const { slug } = params;
  const id = slug.split('%3D');
  const pageRequest = getPageRequest(id[1]);
  const data = await performRequest(pageRequest);

  return (
    <>
      <Header />
      <NavCategories data={data.allCategoriaImatges} />
      <GridImages data={data.allGaleriaImatges} />
    </>
  );
}
