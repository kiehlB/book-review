import { Skeleton, SkeletonTexts } from '@/components/skeleton';

export function PostPageSkeleton() {
  return (
    <>
      <div className="mx-auto my-[3rem] line-clamp-3  h-full max-w-[72rem] px-[0rem] text-center text-[2.5rem] font-bold leading-normal text-[#212529] dark:text-[#ececec] mms:px-[3rem]  mms:text-[2rem] mxs:my-[2rem] mxs:max-w-[100%]  mxs:px-[0rem] mxs:text-[1.5rem]">
        <Skeleton width="60%" height="2.5rem" noSpacing={true} />
      </div>

      <div className="mb-[1rem] flex items-center justify-center text-[#212529] dark:text-[#ececec]">
        <div className="flex text-lg font-medium">
          <div className="flex items-center">
            <Skeleton
              circle={true}
              width="48px"
              height="48px"
              noSpacing={true}
              marginRight="0.5rem"
            />
            <Skeleton width="100px" height="20px" noSpacing={true} />
          </div>
        </div>
        <div className="mx-[0.75rem]  text-lg font-bold text-[#64748b]">·</div>
        <div className="text-lg text-[#344155] dark:text-[#ececec]">
          <Skeleton width="100px" height="20px" noSpacing={true} />
        </div>
      </div>

      <div className="mx-auto mb-[0.5rem] mt-8 flex max-w-[812.5px] flex-wrap justify-start text-sm text-[#868E96]">
        <div className="flex flex-wrap">
          <Skeleton width="80px" height="20px" noSpacing={true} marginRight="0.5rem" />
          <Skeleton width="80px" height="20px" noSpacing={true} marginRight="0.5rem" />
          <Skeleton width="80px" height="20px" noSpacing={true} />
        </div>
      </div>
      <div className="mx-auto grid max-w-[96rem]  grid-cols-10 gap-[1.5rem] mx2:flex mx2:max-w-[1280px]">
        <div className="col-span-2 justify-self-center mx2:col-span-1 mmd:hidden">
          <div className="sticky top-[20%]">
            <Skeleton width="100px" height="40px" noSpacing={true} marginRight="0.5rem" />
          </div>
        </div>

        <div className="col-span-6 mx-auto w-full max-w-[812.5px] mmd:col-span-8">
          <Skeleton width="100%" height="174px" noSpacing={true} marginRight="1rem" />
          <div>
            <div className="dark:prose-dark prose max-w-full">
              <SkeletonTexts wordLengths={[8, 10, 7, 5, 12]} />
              <SkeletonTexts wordLengths={[9, 11, 6]} />
              <SkeletonTexts wordLengths={[7, 12, 10, 8]} />
              <SkeletonTexts wordLengths={[8, 10, 7, 5, 12]} />
              <SkeletonTexts wordLengths={[9, 11, 6]} />
              <SkeletonTexts wordLengths={[7, 12, 10, 8]} />
              <SkeletonTexts wordLengths={[8, 10, 7, 5, 12]} />
              <SkeletonTexts wordLengths={[9, 11, 6]} />
              <SkeletonTexts wordLengths={[7, 12, 10, 8]} />
            </div>
          </div>
          <div className="col-span-2">
            <div className="sticky top-[20%] mt-24">
              <Skeleton height="100px" width="100%" noSpacing={true} />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[812.5px] mx2:hidden">
          <SkeletonTexts wordLengths={[8, 10, 7, 5, 12]} />
        </div>
        <div className="h-[40vh]"></div>
      </div>
    </>
  );
}
