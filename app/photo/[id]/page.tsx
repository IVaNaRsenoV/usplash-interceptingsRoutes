import ImageDetails from '@/app/components/ImageDetails';
import { PhotoI } from '@/app/lib/types';
import { getPhoto } from '@/app/lib/unsplash';
import { FC } from 'react';

interface PhotoDetailsI {
    params: {
        id: string;
    }
}

const PhotoDetail: FC<PhotoDetailsI> = async ({ params: { id } }) => {
    const response = await getPhoto(id);
    const photo = (await response.json()) as PhotoI;

    return <ImageDetails photo={photo} />
}

export default PhotoDetail;