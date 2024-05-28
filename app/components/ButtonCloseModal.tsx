"use client"
import { useRouter } from 'next/navigation';

const ButtonCloseModal = () => {
    const router = useRouter();

    const handleClickClose = () => {
        router.back();
    }

    return (
        <button
            onClick={handleClickClose}
            className='absolute top-4 right-4 cursor-pointer'
        >
            X
        </button>
    )
};

export default ButtonCloseModal;