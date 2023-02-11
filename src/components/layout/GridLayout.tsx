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
        'grid grid-cols-10 gap-6 max-w-[98.5rem] mx-auto mxl:max-w-[75rem] mmd:grid-cols-10',
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
        'grid grid-cols-8 gap-x-6 gap-y-12  max-w-[78.5rem] mx-auto w-full mxl:grid-cols-12 ',
        className,
      )}>
      {children}
    </div>
  );
});

export { PageGrid, PostGrid };
