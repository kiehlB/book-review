'use client';

import HomeTitle from '@/views/home/home-title';
import useGetTags from '@/views/tags/hooks/use-get-tags';
import TagItem from '@/views/tags/tags-item';
import React, { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  const { data: Tags } = useGetTags({ sort: 'byName' });
  const GetTags = Tags?.tags
    ?.slice()
    ?.sort((a: any, b: any) => b.posts_count - a.posts_count);
  return (
    <Suspense>
      <HomeTitle title="태그" />
      {GetTags?.map((tag: any) => (
        <TagItem name={tag.name} key={tag.id} postsCount={tag.posts_count} />
      ))}
    </Suspense>
  );
}
