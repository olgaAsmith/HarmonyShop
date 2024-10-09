'use client';
import Typewriter from '@/components/TypeWriter';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Monofett } from 'next/font/google';
const monofett = Monofett({
  subsets: ['latin'],
  weight: ['400'],
});
export default function AboutUs() {
  return (
    <div className='flex flex-col w-3/4 mx-auto mt-24'>
      <h1
        className={`text-[72px] my-16 uppercase h-[100px] text-dark font-bold`}
      >
        <Typewriter text='Welcome to Harmony Shop' delay={50}></Typewriter>
      </h1>
      <Accordion type='multiple' className='flex flex-col gap-8'>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='uppercase font-bold bg-primary p-4 rounded-lg'>You need 
            high-quality products?
          </AccordionTrigger>
          <AccordionContent
            className={`text-[32px] text-dark uppercase ${monofett.className} min-h-fit bg-primary p-4 rounded-lg`}
          >
            H a r m o n y S h o p
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger className='uppercase font-bold bg-primary p-4 rounded-lg'>You need 
            fast delivery?
          </AccordionTrigger>
          <AccordionContent
            className={`text-[32px] text-dark uppercase ${monofett.className} min-h-fit bg-primary p-4 rounded-lg`}
          >
            H a r m o n y S h o p
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger className='uppercase font-bold bg-primary p-4 rounded-lg'>You need 
            affordable prices?
          </AccordionTrigger>
          <AccordionContent
            className={`text-[32px] text-dark uppercase ${monofett.className} min-h-fit bg-primary p-4 rounded-lg`}
          >
            H a r m o n y S h o p
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger className='uppercase font-bold bg-primary p-4 rounded-lg'>You need 
            inexhaustible reserves?
          </AccordionTrigger>
          <AccordionContent
            className={`text-[32px] text-dark uppercase ${monofett.className} min-h-fit bg-primary p-4 rounded-lg`}
          >
            H a r m o n y S h o p
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
