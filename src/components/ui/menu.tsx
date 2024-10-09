import { cn } from '@/lib/utils';

type Menu = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

type MenuItemProps = {
  isActive?: boolean;
  isActiveSubmenu?: boolean;
  children: React.ReactNode;
} & React.LiHTMLAttributes<HTMLLIElement>;

export function Menu({ children, className }: Menu) {
  return (
    <ul
      className={cn('flex cursor-pointer items-center text-nowrap', className)}
    >
      {children}
    </ul>
  );
}

export function MenuItem({
  isActive,
  isActiveSubmenu,
  children,
  className,
  ...props
}: MenuItemProps) {
  return (
    <li
      className={cn(
        'hover:bg-lightblue active:bg-lightblue rounded-t-lg p-2 text-sm lg:text-lg lg:p-4',
        isActive ? 'bg-lightblue' : '',
        isActiveSubmenu ? 'bg-backgroundbox' : '',
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
}
