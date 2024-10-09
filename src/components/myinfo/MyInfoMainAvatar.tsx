'use client';

import { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { useAuthStore } from '@/lib/api/store/authStore';
import { getInitials } from '@/lib/utils';

export default function MyInfoMainAvatar() {
  const [initials, setInitials] = useState('');
  const { profile } = useAuthStore();

  useEffect(() => {
    if (profile) {
      setInitials(getInitials(profile.name));
    }
  }, [profile]);

  return (
    <div className='flex min-w-[225px] items-center justify-center hidden lg:flex'>
      <Avatar>
        <AvatarImage className='z-10' src={profile?.avatar} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
    </div>
  );
}
