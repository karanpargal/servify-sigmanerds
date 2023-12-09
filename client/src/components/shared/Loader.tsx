import { cn } from '@/utils';
import { ComponentProps } from 'react';

export default function Loader(props: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('grid min-h-[480px] place-items-center', props.className)}
    >
      <span className="loader" />
    </div>
  );
}
