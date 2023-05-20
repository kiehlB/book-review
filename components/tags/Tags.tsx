'use client';

import React from 'react';
import useGetTags from './hooks/usegetTags';
import TagItem, { TagsSkeleton } from './TagsItem';
import { NextLink } from '../arrow-button';

export type TagsProps = {};

function Tags(props: TagsProps) {
  const { data: Tags, loading } = useGetTags({ sort: 'byName' });

  const GetTags = Tags?.tags
    ?.slice()
    ?.sort((a, b) => b.posts_count - a.posts_count)
    ?.slice(0, 6);

  return (
    <div className=" text-[#475569] dark:text-[#e4e5e7]">
      {GetTags?.map(tag => (
        <TagItem
          name={tag.name}
          key={tag.id}
          postsCount={tag.posts_count}
          loading={!Tags || loading}
        />
      ))}
      {loading && Array.from({ length: 8 }).map((_, i) => <TagsSkeleton key={i} />)}
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
