'use client';

import { useProductsStore } from '@/lib/api/store/productsStore';
import { useEffect, useMemo } from 'react';
import Image from 'next/image';
import DefaultImage from '@/public/images/box.jpg';
import { LoadingProducts } from '../loading/home/LoadingProducts';
import { useModalCallStore } from '@/lib/api/store/modalStore';

export default function HomeProductsList() {
  const { products, loadProducts } = useProductsStore();
  const { setIsOpen } = useModalCallStore();
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const shuffledProducts = useMemo(() => {
    return products ? [...products].sort(() => 0.5 - Math.random()).slice(0, 3) : [];
  }, [products]);
  

  const handleOpenProduct = (id: string) => {
    setIsOpen(true, 'product', id);
  };

  return (
    <div className='w-3/4 mx-auto my-16'>
      <h2 className='text-2xl font-bold my-12 text-center'>
        Special products only for You
      </h2>
      {products ? (
        <div className='grid md:grid-cols-3 gap-6'>
          {shuffledProducts.map((product) => {
            const imageSrc = product.images[0].endsWith('.jpg')
              ? product.images[0]
              : DefaultImage;

            return (
              <div
                key={product.id}
                className='rounded-lg shadow-lg overflow-hidden flex flex-col cursor-zoom-in hover:shadow-2xl transition'
                onClick={() => handleOpenProduct(product.id)}
              >
                <Image
                  width={300}
                  height={300}
                  src={imageSrc}
                  alt={product.title}
                  className='h-80 w-full object-cover'
                />
                <div className='p-4 flex-1 flex flex-col justify-between'>
                  <h2 className='text-lg font-semibold mb-2'>
                    {product.title}
                  </h2>
                  <p className='font-bold'>${product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <LoadingProducts />
      )}
    </div>
  );
}
