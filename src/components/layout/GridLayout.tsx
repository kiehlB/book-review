import * as React from 'react';
import clsx from 'clsx';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const PageGrid = React.forwardRef<HTMLElement, GridProps>(function Grid(
  { children, className, as: Tag = 'div' },
  ref,
) {
  return (
    <Tag className={clsx('grid grid-cols-10 gap-6 max-w-[98.5rem] mx-auto', className)}>
      {children}
    </Tag>
  );
});

const PostGrid = React.forwardRef<HTMLElement, GridProps>(function Grid(
  { children, className },
  ref,
) {
  return (
    <div
      className={clsx(
        'grid grid-cols-8 gap-6 max-w-[78.5rem] mx-auto w-full',
        className,
      )}>
      {children}
    </div>
  );
});

export { PageGrid, PostGrid };
