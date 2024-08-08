import { cn } from '@/lib/utils';
import { ChevronRight, LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

type NavButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  active: boolean;
  name: string;
  icon: ReactNode;
};

export default function NavButton({
  className,
  active,
  icon,
  name,
  ...props
}: NavButtonProps) {
  return (
    <div
      className={cn(
        'self-stretch rounded-lg  flex flex-row items-center justify-center py-2 px-3 relative gap-2',
        className,
        active && 'bg-bg-weak-100'
      )}>
      <div>{icon}</div>
      <div
        className={cn(
          ' flex-1 relative tracking-[-0.01em]  leading-[20px] font-medium text-text-sub-500',
          className,
          active && 'text-text-main-900'
        )}>
        {name}
      </div>

      {active && <ChevronRight className='stroke-icon-sub-500' />}
      {active && (
        <div className='h-5 w-1 absolute   left-[-20px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-prime-base' />
      )}
    </div>
  );
}
