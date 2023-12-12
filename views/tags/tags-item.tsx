'use client';

import React from 'react';
import useCoreStore from '@/store/core';
import { SkeletonTexts } from '@/components/skeleton';

export type TagItemProps = {
  name: string;
  postsCount: number;
};

function TagItem(props: TagItemProps) {
  return (
    <div className="flex cursor-pointer flex-col">
      <div className="flex w-[80%] items-center py-1 pl-1">
        <div className="flex-1 font-semibold transition-all hover:pl-[6px] hover:text-[#212529] dark:text-[#e4e5e7] hover:dark:text-[#fff]">
          {props.name}
        </div>
        <div className="rounded-full border bg-[#f1f5f9] px-2 py-1 text-sm font-bold text-[#64748b] dark:border-none dark:bg-[#2b2d31] dark:text-[#e4e5e7]">
          +{props.postsCount}
        </div>
      </div>
    </div>
  );
}

export function TagsSkeleton({}) {
  return (
    <>
      <div className="flex w-[80%] items-center py-1 pl-3">
        <div className="flex-1 font-semibold transition-all hover:pl-[6px]  hover:text-[#212529] dark:text-[#2b2d31]">
          <SkeletonTexts wordLengths={[7]} />
        </div>
        <div className="rounded-full  px-2  py-1 text-sm font-bold dark:border-none dark:bg-[#2b2d31] dark:text-[#2b2d31] ">
          <SkeletonTexts wordLengths={[2]} />
        </div>
      </div>
    </>
  );
}

export default TagItem;
