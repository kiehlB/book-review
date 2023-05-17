import * as React from 'react';
import clsx from 'clsx';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

function PageGrid({ children, className, as: Tag = 'div' }: GridProps) {
  return (
    <Tag
      className={clsx(
        'mx-auto grid max-w-[98.5rem] grid-cols-10 gap-6 mxl:max-w-[75rem] mmd:grid-cols-10',
        className,
      )}>
      {children}
    </Tag>
  );
}

const PostGrid = React.forwardRef<HTMLElement, GridProps>(function Grid(
  { children, className },
  ref,
) {
  return (
    <div
      className={clsx(
        'mx-auto grid w-full max-w-[78.5rem] auto-rows-fr grid-cols-8 gap-x-6 gap-y-12 mxl:grid-cols-12',
        className,
      )}>
      {children}
    </div>
  );
});

export { PageGrid, PostGrid };
