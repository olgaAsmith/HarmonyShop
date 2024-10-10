import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { useModalCallStore } from '@/lib/api/store/modalStore';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '@/lib/api/api';
import DefaultImage from '@/public/images/box.jpg';
import { useEffect, useState } from 'react';

interface ModalProduct {
  handleClose: () => void;
}

export default function ModalProduct({ handleClose }: ModalProduct) {
  const [image, setImage] = useState(DefaultImage);
  const { id } = useModalCallStore();
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id: id },
  });

  useEffect(() => {
    if (data) {
      if (data.product.images.length > 0) {
        const firstImage = data.product.images[0];
        setImage(firstImage.endsWith('.jpg') ? firstImage : DefaultImage);
        console.log(firstImage);
      }
    }
  }, [data]);

  if (loading)
    return <div className='text-white font-bold text-[46px]'>Loading...</div>;

  return (
    <div className='w-full max-w-4xl max-h-[480px] bg-lightblue relative rounded-xl'>
      {error ? (
        <div className='h-[300px] flex justify-center items-center'>
          <span className='text-2xl'>Sorry. Product not found</span>
        </div>
      ) : (
        <div className='flex w-full gap-4'>
          <div className='w-1/2 flex flex-col gap-8 p-4'>
            <h2 className='text-2xl font-bold'>{data.product.title}</h2>
            <p className='text-md'>{data.product.description}</p>
            <span className='font-bold block bg-accent p-2 w-max rounded-xl'>
              Total: {data.product.price} $
            </span>
          </div>
          <div className='w-1/2 flex max-h-[480px] '>
            <Image
              width={300}
              height={300}
              src={image}
              alt={data.product.title}
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
