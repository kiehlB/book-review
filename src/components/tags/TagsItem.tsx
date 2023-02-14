import React from 'react';
import { IoIosClose } from 'react-icons/io';
import useGetTags from './hooks/usegetTags';

export type TagItemProps = {
  name: string;
  postsCount: number;
};

function TagItem(props: TagItemProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center w-[80%] py-1">
        <div className="flex-1">{props.name}</div>
        <div className="rounded-full border bg-[#f1f5f9] text-[#64748b] px-2 py-1 text-sm font-bold">
          +{props.postsCount}
        </div>
      </div>
    </div>
  );
}

export default TagItem;
