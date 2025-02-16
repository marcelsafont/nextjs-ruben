import Header from "@/components/header";
import InfoCols from "@/components/InfoCols/info-cols";
import Nav from "@/components/nav";
import { performRequest } from "@/lib/datocms";
import { toNextMetadata } from "react-datocms";

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
  return {
    title: "About | Barbero Tattoo",
    description: "Página web dedicada al trabajo de Rubén Barbero (barbero tattoo), donde encontrar sus tatuajes y diseños, viajes, ideas y convenciones",
  };
}



export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);


  return (
   <>
    <Header />
    <InfoCols data={data} />;
   </>
  )
}