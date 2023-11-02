'use client';

import React from 'react';
import useGetTags from './hooks/use-get-Tags';
import TagItem, { TagsSkeleton } from './tags-item';
import { NextLink } from '../arrow-button';

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
    <div className=" text-[#475569] dark:text-[#e4e5e7]">
      {GetTags?.map((tag: any) => (
        <TagItem name={tag.name} key={tag.id} postsCount={tag.posts_count} />
      ))}

      <div className="mt-2 flex items-center">
        <NextLink
          className="text-[#475569] hover:text-[#212529] dark:text-[#e4e5e7] dark:hover:text-white"
          href={'/tags'}>
          <span className="mr-2 py-1 text-base font-bold text-[#475569] hover:text-[#212529] dark:text-[#e4e5e7] dark:hover:text-white">
            See All Tags
          </span>
        </NextLink>
      </div>
    </div>
  );
}

export default Tags;
