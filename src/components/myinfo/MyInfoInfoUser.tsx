'use client';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { EllipsisVertical } from 'lucide-react';
import MyInfoSelectMenu from './MyInfoSelectMenu';
import { useEffect, useState } from 'react';
import { useAuthStore } from '@/lib/api/store/authStore';
import { getInitials } from '@/lib/utils';
import { Button } from '../ui/button';

export default function MyInfoInfoUser() {
  const [initials, setInitials] = useState('');
  const { profile } = useAuthStore();

  useEffect(() => {
    if (profile) {
      setInitials(getInitials(profile.name));
    }
  }, [profile]);

  return (
    <div className='flex justify-center lg:justify-between px-6 md:px-0'>
      <Avatar className='w-[60px] h-[60px] mr-[22px] lg:hidden'>
        <AvatarImage src={profile?.avatar} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <h2 className='text-xl lg:text-3xl font-semibold'>{profile?.name}</h2>
      <Button title='SubMenu' variant='icon' className='flex lg:hidden ml-auto'>
        <EllipsisVertical className='w-4 h-4 ease-in-out duration-300 hover:scale-125'></EllipsisVertical>
      </Button>
      <MyInfoSelectMenu></MyInfoSelectMenu>
    </div>
  );
}
