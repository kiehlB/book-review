'use client';

import { PostGrid } from '@/components/layout/grid-layout';
import PostCard from '@/components/post-grid/post-card';
import React from 'react';

import { useRouter, usePathname, useParams } from 'next/navigation';
import useGetSearchPosts from '@/components/post-grid/hooks/useGetSearchPosts';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  const path = usePathname();

  const result = path.match(/\/search\/(.*)/)[1];

  const { data, loading } = useGetSearchPosts(decodeURIComponent(result));

  return (
    <PostGrid className="mt-[1rem]">
      <PostCard posts={data?.searchPosts || []} loading={!data || loading} />
    </PostGrid>
  );
}
