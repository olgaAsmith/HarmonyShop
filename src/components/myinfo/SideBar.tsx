import Link from 'next/link';
import SideBarBox from './SideBarBox';
import {
  CircleUserRound,
  Clock5Icon,
  Facebook,
  Globe,
  Hash,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  UsersRound,
} from 'lucide-react';

export default function SideBarMyInfo() {
  return (
    <div className='flex flex-col w-56 gap-4 mt-[-15px] hidden lg:flex'>
      <SideBarBox>
        <ul className='flex flex-col gap-2'>
          <li className='flex gap-2 items-center'>
            <Link href='##' className='flex gap-2 items-center'>
              <Phone className='w-4 h-4 ease-in-out duration-300 hover:scale-125'></Phone>
              07911 654321
            </Link>
          </li>
          <li className='flex gap-2 items-center'>
            <Link href='##' className='flex gap-2 items-center'>
              <Mail className='w-4 h-4 ease-in-out duration-300 hover:scale-125'></Mail>
              avd.yana@videorollnet
            </Link>
          </li>
          <li className='flex gap-2 items-center'>
            <ul className='flex gap-2'>
              <li>
                <Link href='##'>
                  <Linkedin className='ease-in-out duration-300 hover:scale-125'></Linkedin>
                </Link>
              </li>
              <li>
                <Link href='##'>
                  <Facebook className='ease-in-out duration-300 hover:scale-125'></Facebook>
                </Link>
              </li>
              <li>
                <Link href='##'>
                  <Twitter className='ease-in-out duration-300 hover:scale-125'></Twitter>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </SideBarBox>
      <SideBarBox title='Hire Date'>
        <ul className='flex flex-col gap-2'>
          <li>Sep. 3,2020</li>
          <li>3y - 9m - 20d</li>
        </ul>
      </SideBarBox>
      <SideBarBox>
        <ul className='flex flex-col gap-2'>
          <li className='flex gap-2 items-center'>
            <Hash className='w-4 h-4'></Hash>5
          </li>
          <li className='flex gap-2 items-center'>
            <Clock5Icon className='w-4 h-4'></Clock5Icon>Full-Time
          </li>
          <li className='flex gap-2 items-center'>
            <UsersRound className='w-4 h-4'></UsersRound>Operations
          </li>
          <li className='flex gap-2 items-center'>
            <Globe className='w-4 h-4'></Globe>Europe
          </li>
          <li className='flex gap-2 items-center'>
            <MapPin className='w-4 h-4'></MapPin>London, UK
          </li>
        </ul>
      </SideBarBox>
      <SideBarBox title='Direct Reports'>
        <ul className='flex flex-col gap-2'>
          <li className='flex gap-2 items-center'>
            <CircleUserRound className='w-4 h-4'></CircleUserRound>Shane
          </li>
          <li className='flex gap-2 items-center'>
            <CircleUserRound className='w-4 h-4'></CircleUserRound>Nathan
          </li>
          <li className='flex gap-2 items-center'>
            <CircleUserRound className='w-4 h-4'></CircleUserRound>Mitchell
          </li>
          <li className='flex gap-2 items-center'>
            <CircleUserRound className='w-4 h-4'></CircleUserRound>Philipp
          </li>
          <li className='flex gap-2 items-center'>
            <UsersRound className='w-4 h-4'></UsersRound>4 more...
          </li>
        </ul>
      </SideBarBox>
    </div>
  );
}
