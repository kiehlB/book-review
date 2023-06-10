'use client';

import PostCard from '@/components/post-grid/post-card';
import React from 'react';
import useGetPosts from '@/components/post-grid/hooks/useGetPosts';
import useGetTrendingPosts from '@/components/post-grid/hooks/useGetTrending';
import { PostGrid } from '@/components/layout/grid-layout';
import { Second } from '@/components/layout/app-layout';
import SettingCard from '@/components/setting/Setting-info-card';
import useGetPostsBy from '@/components/post-grid/hooks/useGetPostsBy';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  const { data, loading } = useGetPosts();

  const getPostLiked = data?.recentPosts?.filter(e => e.liked == true);
  return (
    <PostGrid className="mt-[1rem]">
      <PostCard posts={getPostLiked || []} loading={!data || loading} />
    </PostGrid>
  );
}
