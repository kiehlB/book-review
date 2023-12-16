'use client';

import { Suspense } from 'react';
import { PageLayout } from './page-layout';

export type RequestCookie = {
  name: string;
  value: string;
};

interface PageLayoutProps {
  children: React.ReactNode;
  token?: RequestCookie | undefined;
}

function PageLayoutWrapper({ children, token }: PageLayoutProps) {
  return (
    <Suspense fallback={<div>loading</div>}>
      <PageLayout token={token}>{children}</PageLayout>
    </Suspense>
  );
}

export { PageLayoutWrapper };
