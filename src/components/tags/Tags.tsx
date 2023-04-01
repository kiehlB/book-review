import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { NextLink } from '../common/ArrowButton';
import { PostCardSkeleton } from '../post/PostCardItem';
import useGetTags from './hooks/usegetTags';
import TagItem, { TagsSkeleton } from './TagsItem';

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
      <div className="flex items-center mt-4">
        <NextLink className="text-[#475569] hover:text-[#212529]" href={'/'}>
          <div className="font-bold py-1 pl-3 text-[#475569] mr-2 text-base hover:text-[#212529]">
            See All
          </div>
        </NextLink>
      </div>
    </div>
  );
}

export default Tags;
