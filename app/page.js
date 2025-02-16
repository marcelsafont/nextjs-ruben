import { performRequest } from "@/lib/datocms";
import { toNextMetadata } from "react-datocms";
import Home from '@/components/Home/Home'

const PAGE_CONTENT_QUERY = `
  {
    home{
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
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);
  return {
    title: "Inicio | Barbero Tattoo",
    description: "Página web dedicada al trabajo de Rubén Barbero (barbero tattoo), donde encontrar sus tatuajes y diseños, viajes, ideas y convenciones",
    openGraph: {
      images: [
        {
          url: data?.home?.imatge?.url || "/default-image.jpg",
          width: 1200,
          height: 630,
          alt: data.home.titol || "Default Image",
        },
      ],
    },
  };
}


export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);


  return (
    <>
      <Home data={data} />
    </>
  )
}