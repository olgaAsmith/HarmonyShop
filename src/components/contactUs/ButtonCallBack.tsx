'use client';
import { useModalCallStore } from '@/lib/api/store/modalStore';
import { Button } from '../ui/button';

export default function ButtonCallBack() {
  const { setIsOpen } = useModalCallStore();

  const handleClick = () => {
    setIsOpen(true, 'help');
  };

  return (
    <Button onClick={handleClick}>Click and We call you back &rarr;</Button>
  );
}
