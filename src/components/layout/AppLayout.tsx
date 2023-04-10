import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

interface AppLayoutProps {
  first?: React.ReactNode;
  second?: React.ReactNode;
  third?: React.ReactNode;
  className?: string;
}

interface CellLayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const CellLayout: React.FC<CellLayoutProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export const MainNav: React.FC<CellLayoutProps> = ({ children, className }) => (
  <nav className={className}>{children}</nav>
);

export const AppLayout: React.FC<AppLayoutProps> = ({
  first,
  second,
  third,
  className,
}) => {
  const { isdark } = useSelector((state: RootState) => state.core);

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(isdark === 'dark' ? 'light' : 'dark');
    root.classList.add(isdark);
  }, [isdark]);

  return (
    <main className={className}>
      <CellLayout className="first">{first}</CellLayout>
      <CellLayout className="second">{second}</CellLayout>
      <CellLayout className="third">{third}</CellLayout>
    </main>
  );
};

export const First: React.FC<CellLayoutProps> = ({ children }) => (
  <CellLayout className="first">{children}</CellLayout>
);

export const Second: React.FC<CellLayoutProps> = ({ children }) => (
  <CellLayout className="second">{children}</CellLayout>
);

export const Third: React.FC<CellLayoutProps> = ({ children }) => (
  <CellLayout className="third">{children}</CellLayout>
);
