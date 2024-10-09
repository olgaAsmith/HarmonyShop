import * as React from 'react';

import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className='flex items-center relative h-10 w-12 md:w-96 '>
        <SearchIcon className='h-[16px] w-[16px] absolute top-[12px] left-[25px] md:left-[16px]' />
        <input
          type={type}
          className={cn(
            'flex h-full w-full rounded-lg border border-black rounded-[12px] pl-[52px] pr-4 py-2 text-lg placeholder:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
InputWithIcon.displayName = 'Input';

export { InputWithIcon };
