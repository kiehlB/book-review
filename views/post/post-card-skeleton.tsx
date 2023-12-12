import { Skeleton, SkeletonTexts } from '@/components/skeleton';
import * as React from 'react';

export type PostCardSkeletonProps = {
  hideUser?: boolean;
};

export function PostCardSkeleton({ hideUser }: PostCardSkeletonProps) {
  const paddingTop = `${(1 / 1.644444444444444) * 100}%`;

  return (
    <div className="border-stone-100 relative col-span-2 h-full w-full transform cursor-pointer rounded-xl border shadow-md transition duration-500 ease-in-out hover:-translate-y-4 hover:shadow-lg dark:border-none dark:bg-dark-400 mxl:col-span-4 mms:col-span-6 mxs:col-span-12">
      <div className="post-thumbnail">
        <span
          className="block h-full w-full animate-shining rounded bg-[#f1f3f5] dark:bg-dark-300"
          style={{ paddingTop }}></span>
      </div>
      <div className="ml-2 pt-3 dark:text-[#1e293b]">
        <SkeletonTexts wordLengths={[2, 12]} />
      </div>

      <div className="ml-2 dark:text-[#1e293b]">
        <SkeletonTexts wordLengths={[2, 5, 2, 5]} />
        <SkeletonTexts wordLengths={[2, 4, 6, 6, 2, 4]} />
      </div>

      <div className="mt-3"></div>
      <div className="flex justify-between p-3">
        <Skeleton width="6em" marginRight="1rem" noSpacing={false} />
        <Skeleton width="3em" noSpacing />
      </div>
    </div>
  );
}

export default PostCardSkeleton;
