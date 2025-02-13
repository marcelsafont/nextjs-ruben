import { performRequest } from "@/lib/datocms";
import { toNextMetadata } from "react-datocms";
import Home from '@/components/Home/Home'
import HeaderHome from "@/components/HeaderHome/header-home";

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


export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);


  return (
    <>
      <Home data={data} />
    </>
  )
}