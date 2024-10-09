import { Monofett } from 'next/font/google';

const monofett = Monofett({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Footer() {
  return (
    <footer className='px-2 pb-1.5 lg:px-6 lg:pb-0 pl-0 lg:pl-0'>
      <div className='flex justify-between gap-6 items-center lg:items-baseline'>
        <h2 className={`text-[52px] text-dark uppercase ${monofett.className} mx-auto`}>
          H a r m o n y S h o p
        </h2>
      </div>
    </footer>
  );
}
