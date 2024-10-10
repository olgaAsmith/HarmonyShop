import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { useModalCallStore } from '@/lib/api/store/modalStore';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { GET_USER } from '@/lib/api/api';
import DefaultImage from '@/public/images/user2.jpg';

interface ModalUser {
  handleClose: () => void;
}

export default function ModalUser({ handleClose }: ModalUser) {
  const { id } = useModalCallStore();
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: id },
  });

  const image = DefaultImage;

  function getRandomRating() {
    return (Math.random() * (5 - 3) + 3).toFixed(1);
  }
  function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 10) + 10);
  }
  if (loading)
    return <div className='text-white font-bold text-[46px]'>Loading...</div>;

  return (
    <div className='w-full max-w-4xl max-h-[480px] bg-lightblue relative rounded-xl'>
      {error ? (
        <div className='h-[300px] flex justify-center items-center'>
          <span className='text-2xl'>Sorry. User not found</span>
        </div>
      ) : (
        <div className='flex w-full gap-4'>
          <div className='w-1/2 flex flex-col gap-8 p-4'>
            <h2 className='text-2xl font-bold text-center mb-8'>
              {data.user.name}
            </h2>
            <span>Sales: {getRandomNumber()}</span>
            <span>Purchase: {getRandomNumber()}</span>
            <span>Rates: {getRandomRating()}</span>
          </div>
          <div className='w-1/2 flex max-h-[480px] '>
            <Image
              width={300}
              height={300}
              src={image}
              alt={data.user.name}
              className='object-cover rounded-r-xl w-full h-full'
            />
          </div>
        </div>
      )}

      <Button
        type='button'
        variant='icon'
        onClick={handleClose}
        className='absolute top-[-50px] right-[-50px] hover:scale-125 transition '
      >
        <X className='w-12 h-12' color='white'></X>
      </Button>
    </div>
  );
}
