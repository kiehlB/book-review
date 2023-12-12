'use client';

import React from 'react';

import { useRouter, usePathname, useParams } from 'next/navigation';

import { PostGrid } from '@/components/layout/grid-layout';
import useGetSearchPosts from '@/views/post/hooks/use-get-search-posts';
import PostCard from '@/views/post/post-card';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  const path = usePathname() as any;

  let result;
  try {
    const match = path.match(/\/search\/(.*)/);
    result = match ? decodeURIComponent(match[1]) : '';
  } catch (error) {
    console.error('Error parsing path:', error);

    result = '';
  }

  const { data, loading } = useGetSearchPosts(decodeURIComponent(result));

  return (
    <PostGrid className="mt-[1rem]">
      <PostCard posts={data?.searchPosts || []} />
    </PostGrid>
  );
}
