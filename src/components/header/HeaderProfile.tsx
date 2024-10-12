'use client';
import { AlignJustify, CircleHelpIcon, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { useAuthStore } from '@/lib/api/store/authStore';
import { getInitials } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useModalCallStore } from '@/lib/api/store/modalStore';

export default function HeaderProfile() {
  const router = useRouter();
  const [initials, setInitials] = useState('');
  const { profile, isAuthenticated, loadProfile } = useAuthStore();

  const { setIsOpen } = useModalCallStore();

  const handleOpenModalCall = () => {
    setIsOpen(true, 'help');
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    loadProfile();
    router.push('/');
  };

  useEffect(() => {
    if (profile) {
      setInitials(getInitials(profile.name));
    }
  }, [profile]);

  return (
    <div className='flex items-center gap-1 sm:gap-6 h-10'>
      <Button
        title='Ask us'
        variant='icon'
        className='hidden lg:flex'
        onClick={handleOpenModalCall}
      >
        <CircleHelpIcon className='ease-in-out duration-300 hover:scale-125'></CircleHelpIcon>
      </Button>
      <Button title='Menu' variant='icon' className='flex lg:hidden'>
        <AlignJustify className='ease-in-out duration-300 hover:scale-125'></AlignJustify>
      </Button>
      {
        isAuthenticated ? (
          <div className='flex items-center gap-1 sm:gap-6'>
            <Avatar className='w-10 h-10'>
              <AvatarImage src={profile?.avatar} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <Button
              title='Logout'
              variant='outline'
              onClick={handleLogout}
              className='flex items-center justify-center bg-transparent border-none '
            >
              <LogOut className='w-6 h-6 inline-block ease-in-out duration-300 hover:scale-125'></LogOut>
            </Button>
          </div>
        ) : (
          ''
        ) /* (
        <LoginButton isMiniButton={true}></LoginButton>
      ) */
      }
    </div>
  );
}
