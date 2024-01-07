import { MainNav } from '@/components/layout/app-layout';
import { PageGrid } from '@/components/layout/grid-layout';
import { PageLayout } from '@/components/layout/page-layout';
import { RiBookOpenLine, RiFileChartFill } from 'react-icons/ri';
import { AiFillNotification } from 'react-icons/ai';
import { BsTagFill } from 'react-icons/bs';
import { cookies } from 'next/headers';
import Navbar from '@/views/navbar';
import { Core } from '@/components/core';
import { Suspense } from 'react';
import TagLoading from '@/components/loading/tags-loading';
import Tags from '@/views/tags/post-tags';
import { MdRssFeed } from 'react-icons/md';

interface MainLayoutProps {
  children: React.ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  const cookieStore = cookies();
  const token = cookieStore.get('access_token');

  return (
    <>
      <Core />
      <PageLayout token={token}>
        <PageGrid as="div" className="pb-[2rem] pt-[2rem]">
          <MainNav className="col-span-2 mmd:hidden">
            <div className="sticky top-24">
              <Navbar
                primaryItems={[
                  {
                    icon: <RiBookOpenLine />,
                    text: '포스트',
                    to: '/',
                    sub: ['/search', '/search/[query]', '/trending'],
                  },
                  {
                    icon: <MdRssFeed />,
                    text: '피드',
                    to: '/feed',
                  },
                  {
                    icon: <BsTagFill />,
                    text: '태그',
                    to: '/tags',
                  },
                ]}
                secondaryItems={[
                  {
                    icon: <RiFileChartFill />,
                    text: 'Trending tags',
                    to: '/Trending tags',
                  },
                ]}
              />
              <Suspense fallback={<TagLoading />}>
                <Tags />
              </Suspense>
            </div>
          </MainNav>
          <main className="col-span-8 mmd:col-span-12">{children}</main>
        </PageGrid>
      </PageLayout>
    </>
  );
}
