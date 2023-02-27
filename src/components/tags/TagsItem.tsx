import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { PostCardSkeletonProps } from '../post/PostCardItem';
import useGetTags from './hooks/usegetTags';
import styled, { keyframes, css } from 'styled-components';
import { Skeleton, SkeletonTexts } from '../common/Skeleton';

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
        <div className="rounded-full border bg-[#f1f5f9] text-[#64748b] px-2 py-1 text-sm font-bold dark:bg-[#1e293b] dark:border-none dark:text-[#e4e5e7]">
          +{props.postsCount}
        </div>
      </div>
    </div>
  );
}

export function TagsSkeleton({ hideUser }: PostCardSkeletonProps) {
  return (
    <>
      <div className="flex items-center w-[80%] py-1 pl-3">
        <div className="flex-1 transition-all hover:pl-[6px] hover:text-[#212529] hover:dark:text-[#fff] dark:text-[#e4e5e7] font-semibold">
          <SkeletonTexts wordLengths={[7]} />
        </div>
        <div className="rounded-full border bg-[#f1f5f9] text-[#64748b] px-2 py-1 text-sm font-bold dark:bg-[#1e293b] dark:border-none dark:text-[#e4e5e7]">
          <SkeletonTexts wordLengths={[2]} />
        </div>
      </div>
    </>
  );
}

export default TagItem;

const shining = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

const Block = styled.span<{ noSpacing?: boolean; circle?: boolean }>`
  background: #f1f3f5;
  animation: ${shining} 1s ease-in-out infinite;
  display: inline-block;
  border-radius: 4px;
  height: 1em;
  ${props =>
    !props.noSpacing &&
    css`
      & + & {
        margin-left: 0.5rem;
      }
    `}
  ${props =>
    props.circle &&
    css`
      border-radius: 50%;
    `}
`;
