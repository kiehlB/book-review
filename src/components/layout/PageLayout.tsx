import * as React from 'react';
import Header from '../base/Header';

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default PageLayout;
