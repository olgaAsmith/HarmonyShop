'use client';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LOGIN_MUTATION } from '@/lib/api/api';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/api/store/authStore';

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMutation, { loading, error }] = useMutation(LOGIN_MUTATION);
  const router = useRouter();
  const { loadProfile } = useAuthStore();

  const handleLogin = async () => {
    if (!email || !password) {
      return;
    }
    try {
      const { data } = await loginMutation({
        variables: { email, password },
      });
      localStorage.setItem('accessToken', data.login.access_token);
      localStorage.setItem('refreshToken', data.login.refresh_token);
      await loadProfile();
      router.push('/myinfo/timeoff');
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return null;
  return (
    <form>
      <Card className='w-full max-w-sm h-max bg-backgroundbox mt-[60px]'>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='m@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              placeholder='********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter className='flex flex-col'>
          <Button
            className='w-full'
            onClick={handleLogin}
            disabled={loading}
            type='submit'
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
          {error && (
            <p className='text-sm text-red-500 mt-2'>Error: {error.message}</p>
          )}
        </CardFooter>
      </Card>
    </form>
  );
}
