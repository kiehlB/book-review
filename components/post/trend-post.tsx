'use client';

import useGetTrendingPosts from './hooks/use-get-trending';
import PostCard from './post-card';

export default function GetTrendPosts() {
  const { data } = useGetTrendingPosts();

  return <PostCard posts={data?.trendingPosts} />;
}
