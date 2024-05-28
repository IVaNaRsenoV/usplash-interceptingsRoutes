import { FC } from 'react';
import Image from 'next/image';
import { PhotoI } from '../lib/types';

interface ImageDetailsI {
    photo: PhotoI
}

const ImageDetails: FC<ImageDetailsI> = ({ photo }) => {
    return (
        <div>
            <h1 className='font-bold text-2xl text-center my-10'>
                {photo.alt_description}
            </h1>
            <Image
                src={photo.urls.regular}
                width={1000}
                height={600}
                alt={photo.alt_description}
                className="object-cover mx-auto"
            />
        </div>
    )
};

export default ImageDetails;