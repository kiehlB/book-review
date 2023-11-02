'use client';

import React from 'react';

import { useRouter, usePathname, useParams } from 'next/navigation';

import { PostGrid } from '@/components/layout/grid-layout';
import useGetSearchPosts from '@/components/post/hooks/use-get-search-posts';
import PostCard from '@/components/post/post-card';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  const path = usePathname() as any;

  const result = path.match(/\/search\/(.*)/)[1];

  const { data, loading } = useGetSearchPosts(decodeURIComponent(result));

  return (
    <PostGrid className="mt-[1rem]">
      <PostCard posts={data?.searchPosts || []} loading={!data || loading} />
    </PostGrid>
  );
}
