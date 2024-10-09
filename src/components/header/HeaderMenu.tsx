'use client';

import { Menu, MenuItem } from '../ui/menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderMenu() {
  const pathname = usePathname();

  return (
    <Menu className='hidden lg:flex self-end'>
      <MenuItem isActive={pathname === '/'}>
        <Link href='/'>Home</Link>
      </MenuItem>
      <MenuItem isActive={pathname === '/store'}>
        <Link href='/store'>Store</Link>
      </MenuItem>
      <MenuItem isActive={pathname === '/people'}>
        <Link href='/people'>People</Link>
      </MenuItem>
    </Menu>
  );
}
