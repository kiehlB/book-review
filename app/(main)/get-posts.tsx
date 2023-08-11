'use client';

import PostCard from '@/components/post-grid/post-card';
import useGetPosts from '@/components/post-grid/hooks/useGetPosts';

export default function GetPosts() {
  const { data, loading } = useGetPosts();

  return <PostCard posts={data?.recentPosts || []} loading={!data || loading} />;
}
