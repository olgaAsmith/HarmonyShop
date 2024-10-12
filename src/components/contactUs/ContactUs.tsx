import {
  Camera,
  ContactRound,
  Mail,
  Phone,
  SendHorizontal,
  Videotape,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import MapImage from '@/public/images/map.jpg';
import ButtonCallBack from './ButtonCallBack';

export default function ContactUs() {
  return (
    <div className='w-3/4 mx-auto my-16'>
      <div className='flex items-start justify-between'>
        <div>
          <h2 className='text-2xl font-bold text-left mb-16'>
            Contact Us for any question
          </h2>
          <Link
            href={'tel:+77777'}
            className='flex gap-4 items-center text-lg font-bold bg-accent p-4 rounded-xl mb-6 ease-in-out duration-300 hover:scale-105'
          >
            <Phone className='w-8 h-8'></Phone>
            +7 (777) 7777-777-7777
          </Link>
          <ul className='flex gap-6 mb-12'>
            <li className='w-12 h-12 ease-in-out duration-300 hover:scale-125 bg-accent p-2 rounded-xl'>
              <Link href={'mailto:harmony@harmony.harmony'}>
                <Mail className='w-full h-full'></Mail>
              </Link>
            </li>
            <li className='w-12 h-12 ease-in-out duration-300 hover:scale-125 bg-accent p-2 rounded-xl'>
              <Link href='##'>
                <ContactRound className='w-full h-full'></ContactRound>
              </Link>
            </li>
            <li className='w-12 h-12 ease-in-out duration-300 hover:scale-125 bg-accent p-2 rounded-xl'>
              <Link href='##'>
                <Camera className='w-full h-full'></Camera>
              </Link>
            </li>
            <li className='w-12 h-12 ease-in-out duration-300 hover:scale-125 bg-accent p-2 rounded-xl'>
              <Link href='##'>
                <Videotape className='w-full h-full'></Videotape>
              </Link>
            </li>
            <li className='w-12 h-12 ease-in-out duration-300 hover:scale-125 bg-accent p-2 rounded-xl'>
              <Link href='##'>
                <SendHorizontal className='w-full h-full'></SendHorizontal>
              </Link>
            </li>
          </ul>
          <ButtonCallBack></ButtonCallBack>
        </div>
        <div className='w-1/2 h-80 rounded-xl'>
          <Image
            width={300}
            height={300}
            src={MapImage}
            alt='Here we are'
            className='h-full w-full object-cover rounded-xl'
          />
        </div>
      </div>
    </div>
  );
}
