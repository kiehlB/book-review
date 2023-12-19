'use client';

import Link from 'next/link';
import * as React from 'react';
import { Post } from '../../types/apolloComponent';
import { formatDate } from '../../lib/utils';
import styled from 'styled-components';
import RatioImage from '@/components/ratio-image';

interface GridProps {
  post: Post;
}
function PostCardContent({ post }: GridProps) {
  const hasThumbnail = post?.thumbnail;
  const postBodyClass = hasThumbnail ? 'mt-1' : 'mt-2';
  const PostBodyComponent = hasThumbnail ? PostBody : WithoutPostBody;

  return (
    <article className="flex h-full flex-col justify-between">
      <div className="px-4">
        <div className="truncate pt-[1rem] text-[0.8125rem] font-semibold text-[#4b4b4b] dark:text-darkText">
          도서: {post?.bookInfo?.bookTitle || '미선택'}
        </div>

        <section
          className={`m-0 mb-1 mt-2 text-base font-semibold leading-normal text-[#212529] dark:text-darkText 
             ${post?.thumbnail ? 'line-clamp-3' : 'line-clamp-2'} 
             box-border overflow-hidden whitespace-normal break-words`}>
          {post?.title}
        </section>

        <PostBodyComponent
          className={`text-sm text-[#495057] dark:text-darkText ${postBodyClass} 
             box-border overflow-hidden whitespace-normal break-words`}>
          <div>{post?.postbody}</div>
        </PostBodyComponent>
      </div>

      <div className="mt-[1.2rem] flex justify-between p-4 leading-normal text-[#2e2e2e] dark:text-darkText">
        <div className="flex text-xs font-semibold">
          <div className="mr-2">좋아요 {post?.likes}개</div>
          <div>댓글 {post?.comments_count}개</div>
        </div>

        <div className="flex text-xs font-semibold text-[#2e2e2e] dark:text-darkText">
          {formatDate(post?.released_at)}
        </div>
      </div>
    </article>
  );
}

function PostCardItem({ post }: GridProps) {
  return (
    <Link
      href={`/post/${post.id}`}
      className="border-stone-100 relative col-span-2 h-full w-full transform cursor-pointer rounded-lg border shadow-md transition duration-500 ease-in-out hover:translate-y-[-15px] hover:shadow-lg dark:border-none dark:bg-dark-400 mxl:col-span-4 mms:col-span-6 mxs:col-span-12">
      <div className="flex h-full flex-1 flex-col">
        {post?.thumbnail && (
          <RatioImage
            alt="img"
            widthRatio={1.644444444444444}
            heightRatio={1}
            src={post?.thumbnail}
            className="relative"
          />
        )}
        <PostCardContent post={post} />
      </div>
    </Link>
  );
}

export default PostCardItem;

const WithoutPostBody = styled.section`
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: initial;
  word-wrap: break-word;
  overflow: hidden;
`;

const PostBody = styled.section`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: initial;
  word-wrap: break-word;
  overflow: hidden;
`;
