import Header from "@/components/header";
import InfoCols from "@/components/InfoCols/info-cols";
import Nav from "@/components/nav";
import { performRequest } from "@/lib/datocms";
import { toNextMetadata } from "react-datocms";
import Faqs from "@/components/Faqs/Faqs";

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
  return {
    title: "Faqs | Barbero Tattoo",
    description: "¿Tienes preguntas sobre tatuajes? Resuelve tus dudas en esta página con las respuestas que buscas.",
  };
}



export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);


  return (
   <>
    <Header />
    <Faqs data={data}/>
   </>
  )
}