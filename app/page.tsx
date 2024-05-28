import Link from 'next/link';
import Image from 'next/image';
import { PhotoI } from './lib/types';
import { getPhotos } from './lib/unsplash';

const Home = async () => {
  const response = await getPhotos();
  const photos = (await response.json()) as PhotoI[];

  console.log(photos);

  return (
    <div className="grid md:grid-cols-3 place-items-center gap-4">
      {
        photos.map(photo => (
          <div key={photo.id} className="shadow-xl rounded-md">
            <Link href={`/photo/${photo.id}`}>
              <Image
                src={photo.urls.regular}
                width={600}
                height={600}
                alt={photo.alt_description}
                className="h-80 object-cover rounded-md"
              />
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Home;