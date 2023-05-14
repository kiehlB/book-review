import { AppLayout, First, MainNav, Second } from '@/components/layout/app-layout';
import { PageGrid, PostGrid } from '@/components/layout/grid-layout';
import { PageLayout } from '@/components/layout/page-layout';
import Navbar from '@/components/navbar';

import { RiBookOpenLine } from 'react-icons/ri';
import { RiFileChartFill } from 'react-icons/ri';
import { BsTagFill } from 'react-icons/bs';
import { AiFillNotification } from 'react-icons/ai';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';
import { IoMdTime } from 'react-icons/io';
import HomeTitle from '@/components/home/home-title';

export default function Trending() {
  return (
    <main>
       <PageLayout>
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
                  icon: <AiFillNotification />,
                  text: '게시판',
                  to: '/post',
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
            {/* <Tags /> */}
          </div>
        </MainNav>

        <AppLayout
          className="col-span-8 mmd:col-span-12"
          first={
            <First>
              <HomeTitle
                title="포스트"
                primaryItems={[
                  {
                    svg: <IoMdTime />,
                    name: '최신',
                    href: '/',
                  },
                  {
                    svg: <MdOutlineLocalFireDepartment />,
                    name: '트렌딩',
                    href: '/trending',
                  },
                ]}
              />
            </First>
          }
          second={
            <Second>
              {/* <PostGrid className="mt-[1rem]">
                <PostCard
                    posts={post?.data?.recentPosts || []}
                    loading={!post?.data || post?.loading}
                  />
              </PostGrid> */}
            </Second>
          }
        />
      </PageGrid>
       </PageLayout>
    </main>
  );
}
