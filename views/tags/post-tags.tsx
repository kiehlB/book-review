'use client';

import React from 'react';
import TagItem, { TagsSkeleton } from './tags-item';
import useGetTags from './hooks/use-get-tags';
import { NextLink } from '@/components/arrow-button';

export type TagsProps = {};

function Tags(props: TagsProps) {
  const { data: Tags } = useGetTags({ sort: 'byName' }) as any;

  const GetTags = Tags?.tags
    ?.slice()
    ?.sort(
      (a: { posts_count: number }, b: { posts_count: number }) =>
        b.posts_count - a.posts_count,
    )
    ?.slice(0, 6);

  return (
    <div className=" text-[#495057] dark:text-darkText">
      {GetTags?.map((tag: any) => (
        <TagItem name={tag.name} key={tag.id} postsCount={tag.posts_count} />
      ))}

      <div className="mt-2 flex items-center">
        <NextLink
          className="text-[#495057] hover:text-[#212529] dark:text-darkText dark:hover:text-white"
          href={'/tags'}>
          <span className="mr-2 py-1 text-base font-bold text-[#495057] hover:text-[#212529] dark:text-darkText dark:hover:text-white">
            See All Tags
          </span>
        </NextLink>
      </div>
    </div>
  );
}

export default Tags;
