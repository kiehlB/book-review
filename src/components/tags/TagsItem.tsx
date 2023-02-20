import React from 'react';
import { IoIosClose } from 'react-icons/io';
import useGetTags from './hooks/usegetTags';

export type TagItemProps = {
  name: string;
  postsCount: number;
};

function TagItem(props: TagItemProps) {
  return (
    <div className="flex flex-col cursor-pointer">
      <div className="flex items-center w-[80%] py-1 pl-3">
        <div className="flex-1 transition-all hover:pl-[6px] hover:text-[#212529] hover:dark:text-[#fff] dark:text-[#e4e5e7] font-semibold">
          {props.name}
        </div>
        <div className="rounded-full border bg-[#f1f5f9] text-[#64748b] px-2 py-1 text-sm font-bold dark:bg-[#1e293b] dark:border-none dark:text-[#e4e5e7]">
          +{props.postsCount}
        </div>
      </div>
    </div>
  );
}

export default TagItem;
