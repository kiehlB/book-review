import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

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
  const { isdark } = useSelector((state: RootState) => state.core);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(isdark === 'dark' ? 'light' : 'dark');
    root.classList.add(isdark);
  }, [isdark]);

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
