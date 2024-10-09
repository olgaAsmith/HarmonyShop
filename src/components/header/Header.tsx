import { Monofett } from 'next/font/google';
import HeaderMenu from './HeaderMenu';
import HeaderProfile from './HeaderProfile';

const monofett = Monofett({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Header() {
  return (
    <header className='px-2 pb-1.5 lg:px-6 lg:pb-0 pl-0 lg:pl-0'>
      <div className='flex justify-between gap-6 items-center lg:items-baseline'>
        <HeaderMenu></HeaderMenu>
        <h2
          className={`text-[52px] text-dark uppercase ${monofett.className}`}
        >
          H a r m o n y S h o p
        </h2>
        <HeaderProfile></HeaderProfile>
      </div>
    </header>
  );
}
