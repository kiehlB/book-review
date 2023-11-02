'use client';

import React, { Suspense } from 'react';
import { PostGrid } from '@/components/layout/grid-layout';
import HomeTitle from '@/components/home/home-title';
import useGetPosts from '@/components/post/hooks/use-get-posts';
import PostCard from '@/components/post/post-card';
import PostLoading from '@/components/loading/post-loading';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  const { data } = useGetPosts();

  const getPostLiked = data?.recentPosts?.filter(e => e?.liked == true);
  return (
    <>
      <HomeTitle title="좋아요 글" />

      <PostGrid className="mt-[1rem]">
        <Suspense fallback={<PostLoading />}>
          <PostCard posts={getPostLiked} />
        </Suspense>
      </PostGrid>
    </>
  );
}
