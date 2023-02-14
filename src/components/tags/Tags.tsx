import React from 'react';
import { IoIosClose } from 'react-icons/io';
import useGetTags from './hooks/usegetTags';
import TagItem from './TagsItem';

export type TagsProps = {};

function Tags(props: TagsProps) {
  const { data: Tags } = useGetTags({ sort: 'byName' });
  console.log(Tags);

  return (
    <div className="px-1 text-[#475569]">
      {Tags?.tags?.map(tag => (
        <TagItem name={tag.name} key={tag.id} postsCount={tag.posts_count} />
      ))}
    </div>
  );
}

export default Tags;
