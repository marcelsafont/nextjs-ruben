import { performRequest } from '@/lib/datocms';
import Home from '@/components/Home/Home';
import { buildMetadata } from '@/lib/metadata';

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
  const image = data?.home?.imatge?.url;

  return buildMetadata({
    title: 'Barbero Tattoo. Tatuador en Barcelona',
    description:
      'Barbero Tattoo, tatuador en Barcelona. Tatuajes personalizados con diseño propio, atención cercana y viajes por toda España. Pide cita por WhatsApp.',
    path: '/',
    image,
    keywords: [
      'tatuador en Barcelona',
      'barbero tattoo Barcelona',
      'tatuador en Barcelona',
      'tatuajes Barcelona',
    ],
  });
}

export default async function Page() {
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);

  return (
    <>
      <Home data={data} />
    </>
  );
}
