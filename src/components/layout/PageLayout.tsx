import * as React from 'react';
import Header from '../base/Header';
import TestHeader from '../base/TestHeader';

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="border px-[1rem]">
      <Header />
      <main>{children}</main>
    </div>
  );
}

function TestPageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <TestHeader />
      <main>{children}</main>
    </div>
  );
}

export { PageLayout, TestPageLayout };
