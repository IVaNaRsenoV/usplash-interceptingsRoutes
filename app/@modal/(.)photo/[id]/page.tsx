import { FC } from 'react';
import { PhotoI } from '@/app/lib/types';
import { getPhoto } from '@/app/lib/unsplash';
import ImageDetails from '@/app/components/ImageDetails';
import ButtonCloseModal from '@/app/components/ButtonCloseModal';

interface ModalDetailPageProps {
    params: {
        id: string;
    }
}

const Modal: FC<ModalDetailPageProps> = async ({ params }) => {
    const response = await getPhoto(params.id);
    const photo = (await response.json()) as PhotoI;

    return (
        <div className="fixed inset-0 bg-zinc-900/20 z-10">
            <div className="flex items-center h-full max-w-3xl mx-auto">
                <div className="relative bg-white w-full py-20 px-2 rounded-lg">
                    <ButtonCloseModal />
                    <ImageDetails photo={photo} />
                </div>
            </div>
        </div>
    )
};

export default Modal;