'use client';

import useGetPosts from './hooks/use-get-posts';
import PostCard from './post-card';

export default function GetPosts() {
  const { data } = useGetPosts();

  return <PostCard posts={data?.recentPosts} />;
}
