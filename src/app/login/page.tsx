'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/api/store/authStore';
import { LoginForm } from '@/components/login/LoginForm';

export default function Login() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/myinfo');
    }
  }, [isAuthenticated, router]);

  return (
    <div className='flex justify-center h-screen bg-lightblue px-4'>
      <LoginForm></LoginForm>
    </div>
  );
}
