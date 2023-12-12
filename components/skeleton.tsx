import React from 'react';

export type SkeletonProps = {
  width?: number | string;
  height?: number | string;
  flex?: number;
  marginRight?: number | string;
  noSpacing: boolean;
  circle?: boolean;
  className?: string;
  borderRadius?: string;
};

type SkeletonTextsProps = {
  wordLengths: number[];
  useFlex?: boolean;
};

export function SkeletonTexts({ wordLengths, useFlex }: SkeletonTextsProps) {
  return (
    <>
      {wordLengths.map((length, index) => {
        const props = {
          [useFlex ? 'flex' : 'width']: useFlex ? length : `${length}rem`,
        };
        return <Skeleton noSpacing={true} key={index} {...props} />;
      })}
    </>
  );
}

export function Skeleton({
  width,
  height,
  flex,
  marginRight,
  noSpacing,
  circle,
  className,
  borderRadius,
}: SkeletonProps) {
  return (
    <>
      <div
        className={`inline-block h-4 animate-shining rounded bg-[#f1f3f5] dark:bg-dark-300 ${
          circle ? 'rounded-full' : 'rounded'
        } ${noSpacing ? 'ml-2' : ''}`}
        style={{ width, height, flex, marginRight, borderRadius }}></div>
    </>
  );
}
