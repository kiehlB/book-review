'use client';

import { PostGrid } from '@/components/layout/grid-layout';
import PostCard from '@/components/post-grid/post-card';
import React from 'react';
import useGetPosts from '@/components/post-grid/hooks/useGetPosts';
import HomeTitle from '@/components/home/home-title';
import useGetTags from '@/components/tags/hooks/usegetTags';
import TagItem from '@/components/tags/TagsItem';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  const { data: Tags, loading } = useGetTags({ sort: 'byName' });
  const GetTags = Tags?.tags
    ?.slice()
    ?.sort((a, b) => b.posts_count - a.posts_count)
    ?.slice(0, 6);

  return (
    <div>
      <HomeTitle title="태그" />
      {GetTags?.map(tag => (
        <TagItem
          name={tag.name}
          key={tag.id}
          postsCount={tag.posts_count}
          loading={!Tags || loading}
        />
      ))}
    </div>
  );
}
