'use client';
import Link from 'next/link';
import { Menu, MenuItem } from '../ui/menu';
import { usePathname } from 'next/navigation';

export default function MyInfoMenu() {
  const pathname = usePathname();

  return (
    <div className='flex mt-9 overflow-x-auto w-full max-w-[100%]'>
      <Menu className='bg-lightblue gap-2 xl:gap-4 '>
        <MenuItem
          isActiveSubmenu={pathname === '/myinfo'}
          className='hover:bg-backgroundbox active:bg-backgroundbox'
        >
          <Link href='/myinfo'>Personal</Link>
        </MenuItem>
        <MenuItem
          isActiveSubmenu={pathname === '/myinfo/job'}
          className='hover:bg-backgroundbox active:bg-backgroundbox'
        >
          <Link href='/myinfo/job'>Job</Link>
        </MenuItem>
        <MenuItem
          isActiveSubmenu={pathname === '/myinfo/timeoff'}
          className='hover:bg-backgroundbox active:bg-backgroundbox'
        >
          <Link href='/myinfo/timeoff'>Time Off</Link>
        </MenuItem>
        <MenuItem
          isActiveSubmenu={pathname === '/myinfo/emergency'}
          className='hover:bg-backgroundbox active:bg-backgroundbox'
        >
          <Link href='/myinfo/emergency'>Emergency</Link>
        </MenuItem>
        <MenuItem
          isActiveSubmenu={pathname === '/myinfo/documents'}
          className='hover:bg-backgroundbox active:bg-backgroundbox'
        >
          <Link href='/myinfo/documents'>Documents</Link>
        </MenuItem>
        <MenuItem
          isActiveSubmenu={pathname === '/myinfo/notes'}
          className='hover:bg-backgroundbox active:bg-backgroundbox'
        >
          <Link href='/myinfo/notes'>Notes</Link>
        </MenuItem>
        <MenuItem
          isActiveSubmenu={pathname === '/myinfo/benefits'}
          className='hover:bg-backgroundbox active:bg-backgroundbox'
        >
          <Link href='/myinfo/benefits'>Benefits</Link>
        </MenuItem>
        <MenuItem
          isActiveSubmenu={pathname === '/myinfo/training'}
          className='hover:bg-backgroundbox active:bg-backgroundbox'
        >
          <Link href='/myinfo/training'>Training</Link>
        </MenuItem>
        <MenuItem
          isActiveSubmenu={pathname === '/myinfo/assets'}
          className='hover:bg-backgroundbox active:bg-backgroundbox'
        >
          <Link href='/myinfo/assets'>Assets</Link>
        </MenuItem>
        <MenuItem
          isActiveSubmenu={pathname === '/myinfo/more'}
          className='hover:bg-backgroundbox active:bg-backgroundbox'
        >
          <Link href='/myinfo/more'>More</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
