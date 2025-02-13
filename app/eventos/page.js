import GridEvents from "@/components/GridEvents/GridEvents";
import Header from "@/components/header";
import InfoCols from "@/components/InfoCols/info-cols";
import Nav from "@/components/nav";
import { performRequest } from "@/lib/datocms";
import { toNextMetadata } from "react-datocms";

let date = new Date();
let day = String(date.getDate()).padStart(2, '0');
let month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
let year = date.getFullYear();

let currentDate = year + '-' + month + '-' + day;

const PAGE_CONTENT_QUERY = `
  {
    allEsdeveniments(orderBy: inici_ASC, filter: {inici: {gte: "${currentDate}"}}){
      id
      titol
      ciutat{
        id
        nom
      }
      inici
      final
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
    <Header />
    <GridEvents data={data} />
   </>
  )
}