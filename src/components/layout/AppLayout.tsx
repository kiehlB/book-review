import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

export type AppLayoutProps = {
  first?: React.ReactNode;
  second?: React.ReactNode;
  third?: React.ReactNode;
  className?: string;
};

export type CellLayoutProps = {
  children?: React.ReactNode;
  className?: string;
};

export function MainNav({ children, className }: CellLayoutProps) {
  return <nav className={className}>{children}</nav>;
}
export function AppLayout({ first, second, third, className }: AppLayoutProps) {
  const { isdark } = useSelector((state: RootState) => state.core);

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(isdark == 'dark' ? 'light' : 'dark');
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
export function First({ children }: CellLayoutProps) {
  return <>{children}</>;
}
export function Second({ children }: CellLayoutProps) {
  return <>{children}</>;
}
export function Third({ children }: CellLayoutProps) {
  return <>{children}</>;
}
