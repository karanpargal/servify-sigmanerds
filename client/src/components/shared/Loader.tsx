import { ComponentProps } from 'react';

export default function Loader(props: ComponentProps<'div'>) {
  return (
    <div {...props} className="grid min-h-[480px] place-items-center">
      <span className="loader" />
    </div>
  );
}
