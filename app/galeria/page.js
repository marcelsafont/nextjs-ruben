import Header from "@/components/header";
import Images from "@/components/Images/Images";
import { performRequest } from "@/lib/datocms";
import { toNextMetadata } from "react-datocms";

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
  return {
    title: "Galeria | Barbero Tattoo",
    description: "Página web dedicada al trabajo de Rubén Barbero (barbero tattoo), donde encontrar sus tatuajes y diseños, viajes, ideas y convenciones",
  };
}



export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);


  return (
   <>
    <Header />
    <Images data={data}/>
   </>
  )
}