import * as React from 'react';
import clsx from 'clsx';

interface GridProps {
  children: React.ReactNode;
  overflow?: boolean;
  className?: string;
  as?: React.ElementType;
  id?: string;
  nested?: boolean;
  rowGap?: boolean;
  featured?: boolean;
}

const Grid = React.forwardRef<HTMLElement, GridProps>(function Grid(
  { children, className, as: Tag = 'div', featured, nested, rowGap, id },
  ref,
) {
  return (
    <Tag
      ref={ref}
      id={id}
      className={clsx('relative', {
        'mx-10vw': !nested,
        'w-full': nested,
        'py-10 md:py-24 lg:pb-40 lg:pt-36': featured,
      })}>
      {featured ? (
        <div className="absolute inset-0 -mx-5vw">
          <div className="bg-secondary mx-auto h-full w-full max-w-8xl rounded-lg" />
        </div>
      ) : null}

      <div
        className={clsx(
          'relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6',
          {
            'mx-auto max-w-7xl': !nested,
            'gap-y-4 lg:gap-y-6': rowGap,
          },
          className,
        )}>
        {children}
      </div>
    </Tag>
  );
});

export { Grid };
