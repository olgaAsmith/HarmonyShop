import { Skeleton } from '@/components/ui/skeleton';

export function LoadingUsers() {
  return (
    <div className='grid md:grid-cols-6 gap-6'>
      <div className='flex flex-col rounded-xl p-2'>
        <Skeleton className='w-[150px] h-[150px] bg-accent rounded-full mx-auto' />
        <Skeleton className='h-8 w-full bg-accent mt-4' />
      </div>
      <div className='flex flex-col rounded-xl p-2'>
        <Skeleton className='w-[150px] h-[150px] bg-accent rounded-full mx-auto' />
        <Skeleton className='h-8 w-full bg-accent mt-4' />
      </div>
      <div className='flex flex-col rounded-xl p-2'>
        <Skeleton className='w-[150px] h-[150px] bg-accent rounded-full mx-auto' />
        <Skeleton className='h-8 w-full bg-accent mt-4' />
      </div>
      <div className='flex flex-col rounded-xl p-2'>
        <Skeleton className='w-[150px] h-[150px] bg-accent rounded-full mx-auto' />
        <Skeleton className='h-8 w-full bg-accent mt-4' />
      </div>
      <div className='flex flex-col rounded-xl p-2'>
        <Skeleton className='w-[150px] h-[150px] bg-accent rounded-full mx-auto' />
        <Skeleton className='h-8 w-full bg-accent mt-4' />
      </div>
      <div className='flex flex-col rounded-xl p-2'>
        <Skeleton className='w-[150px] h-[150px] bg-accent rounded-full mx-auto' />
        <Skeleton className='h-8 w-full bg-accent mt-4' />
      </div>
    </div>
  );
}
