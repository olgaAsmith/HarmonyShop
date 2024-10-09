'use client';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';

type LoginButton = {
  isMiniButton: boolean;
};

export default function LoginButton({ isMiniButton }: LoginButton) {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/login');
  };

  return (
    <>
      {isMiniButton ? (
        <Button title='Login' variant='icon' onClick={handleSignIn}>
          <LogIn className='w-6 h-6 inline-block ease-in-out duration-300 hover:scale-125'></LogIn>
        </Button>
      ) : (
        <Button onClick={handleSignIn} className='m-8 w-[200px]'>
          Sign in
        </Button>
      )}
    </>
  );
}
