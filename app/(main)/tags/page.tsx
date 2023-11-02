'use client';

import React, { Suspense } from 'react';

import HomeTitle from '@/components/home/home-title';
import useGetTags from '@/components/tags/hooks/use-get-Tags';
import TagItem from '@/components/tags/tags-item';

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
