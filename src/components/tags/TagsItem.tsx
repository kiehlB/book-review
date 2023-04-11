import React from 'react';
import { PostCardSkeletonProps } from '../post/PostCardItem';
import { Skeleton, SkeletonTexts } from '../common/Skeleton';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

export type TagItemProps = {
  name: string;
  postsCount: number;
  loading: boolean;
};

function TagItem(props: TagItemProps) {
  return (
    <div className="flex flex-col cursor-pointer">
      <div className="flex items-center w-[80%] py-1 pl-3">
        <div className="flex-1 transition-all hover:pl-[6px] hover:text-[#212529] hover:dark:text-[#fff] dark:text-[#e4e5e7] font-semibold">
          {props.name}
        </div>
        <div className="rounded-full border bg-[#f1f5f9] text-[#64748b] px-2 py-1 text-sm font-bold dark:bg-[#2b2d31] dark:border-none dark:text-[#e4e5e7]">
          +{props.postsCount}
        </div>
      </div>
    </div>
  );
}

export function TagsSkeleton({ hideUser }: PostCardSkeletonProps) {
  const { isdark } = useSelector((state: RootState) => state.core);
  return (
    <>
      <div className="flex items-center w-[80%] py-1 pl-3">
        <div className="flex-1 transition-all hover:pl-[6px] hover:text-[#212529]  dark:text-[#2b2d31] font-semibold">
          <SkeletonTexts wordLengths={[7]} isdark={isdark} />
        </div>
        <div className="rounded-full  dark:text-[#2b2d31]  px-2 py-1 text-sm font-bold dark:bg-[#2b2d31] dark:border-none ">
          <SkeletonTexts wordLengths={[2]} isdark={isdark} />
        </div>
      </div>
    </>
  );
}

export default TagItem;
