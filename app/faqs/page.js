import Header from "@/components/header";
import InfoCols from "@/components/InfoCols/info-cols";
import Nav from "@/components/nav";
import { performRequest } from "@/lib/datocms";
import { toNextMetadata } from "react-datocms";
import Faqs from "@/components/Faqs/Faqs";

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


export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);


  return (
   <>
    <Header />
    <Faqs />
   </>
  )
}