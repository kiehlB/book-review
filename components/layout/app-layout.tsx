import React from 'react';

type MainNavProps = CellLayoutProps;

export function MainNav({ children, className }: MainNavProps) {
  return <nav className={className}>{children}</nav>;
}

type AppLayoutProps = {
  first?: React.ReactNode;
  second?: React.ReactNode;
  third?: React.ReactNode;
  className?: string;
};

export function AppLayout({ first, second, third, className }: AppLayoutProps) {
  return (
    <main className={className}>
      {first}
      {second}
      {third}
    </main>
  );
}

type CellLayoutProps = {
  children?: React.ReactNode;
  className?: string;
};

export function First({ children }: CellLayoutProps) {
  return <>{children}</>;
}

export function Second({ children }: CellLayoutProps) {
  return <>{children}</>;
}

export function Third({ children }: CellLayoutProps) {
  return <>{children}</>;
}
