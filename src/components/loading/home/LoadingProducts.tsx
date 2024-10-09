import { Skeleton } from '@/components/ui/skeleton';

export function LoadingProducts() {
  return (
    <div className='grid md:grid-cols-3 gap-6'>
      <div>
        <Skeleton className='h-80 w-full bg-accent' />
        <Skeleton className='h-8 w-full bg-accent mt-4' />
        <Skeleton className='h-8 w-1/4 bg-accent mt-2' />
      </div>
      <div>
        <Skeleton className='h-80 w-full bg-accent' />
        <Skeleton className='h-8 w-full bg-accent mt-4' />
        <Skeleton className='h-8 w-1/4 bg-accent mt-2' />
      </div>
      <div>
        <Skeleton className='h-80 w-full bg-accent' />
        <Skeleton className='h-8 w-full bg-accent mt-4' />
        <Skeleton className='h-8 w-1/4 bg-accent mt-2' />
      </div>
    </div>
  );
}
