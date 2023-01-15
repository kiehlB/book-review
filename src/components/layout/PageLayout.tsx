import * as React from 'react';
import Header from '../base/Header';

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="z-[2]">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default PageLayout;
