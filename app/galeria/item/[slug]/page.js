import DetailProject from "@/components/DetailProject/Detailproject";
import Header from "@/components/header";
import { performRequest } from "@/lib/datocms";
import { toNextMetadata } from "react-datocms";


function getPageRequest(slug) {


const PAGE_CONTENT_QUERY = `
{
   galeriaImatge(filter: {id: {eq: "${slug}"}}) {
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
  const { slug } = params; // Get dynamic slug from the URL
  const id = slug.split('%3D')
  const pageRequest = getPageRequest(id[1]);
  const data = await performRequest(pageRequest);
  return {
    title: `${data.galeriaImatge.titol} | Barbero Tattoo`,
    description: "Página web dedicada al trabajo de Rubén Barbero (barbero tattoo), donde encontrar sus tatuajes y diseños, viajes, ideas y convenciones",
  };
}


export default async function Page({ params }) {
  const { slug } = params; // Get dynamic slug from the URL
    const id = slug.split('%3D')
    const pageRequest = getPageRequest(id[1]);
    const data = await performRequest(pageRequest);


  return (
   <>
    <Header />
    <DetailProject data={data.galeriaImatge} />
   </>
  )
}