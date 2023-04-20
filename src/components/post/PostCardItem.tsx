import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react';
import media from '../../lib/media';
import { Post } from '../../types/apolloComponent';
import RatioImage from '../common/RatioImage';
import { Skeleton, SkeletonTexts } from '../common/Skeleton';
import styled, { keyframes, css } from 'styled-components';
import { formatDate } from '../../lib/utils';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

interface GridProps {
  post: Post;
}
export type PostCardSkeletonProps = {
  hideUser?: boolean;
};

function PostCardItem({ post }: GridProps) {
  const withoutThumbnail = (
    <Link
      href={`/post/${post.id}`}
      className="col-span-2 mxl:col-span-4 mmx:col-span-6 mxs:col-span-12 h-full relative w-full border border-stone-100 rounded-xl cursor-pointer transform  hover:translate-y-[-15px] transition duration-500 ease-in-out shadow-md hover:shadow-lg dark:border-none dark:bg-[#212227]">
      <div className="flex flex-1 flex-col h-full">
        <div className="h-full justify-between flex flex-col">
          <div className="px-4">
            <span
              className={clsx(
                'text-[#4b4b4b] font-semibold text-[0.8125rem] dark:text-[#CFCFCF] truncate pt-[1rem]',
              )}>
              도서: {post?.bookInfo?.bookTitle ? post?.bookInfo?.bookTitle : '미선택'}
            </span>

            <WithoutPostTitle className="text-[#18191b] font-semibold text-base m-0 mb-[0.25rem] leading-normal mt-2 dark:text-[#CFCFCF]">
              {post?.title}
            </WithoutPostTitle>

            <WithoutPostBody className="text-sm mt-2 text-[#495057] dark:text-[#CFCFCF]">
              <div>{(post as any)?.postbody}</div>
            </WithoutPostBody>
          </div>

          <div className="flex justify-between mt-6 leading-normal text-[#2e2e2e] dark:text-[#CFCFCF] p-4">
            <div className="flex font-semibold text-xs">
              <span className="mr-2">좋아요 {post?.likes}개</span>
              <span>댓글 {post?.subs_count}개</span>
            </div>

            <span className="flex font-semibold text-xs text-[#2e2e2e] dark:text-[#CFCFCF] ">
              {formatDate(post?.released_at)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );

  const withThumbnail = (
    <Link
      href={`/post/${post.id}`}
      className="col-span-2 mxl:col-span-4 mmx:col-span-6 mxs:col-span-12 h-full text-black relative w-full border border-stone-100 rounded-xl cursor-pointer transform  hover:translate-y-[-15px] transition duration-500 ease-in-out shadow-md hover:shadow-lg dark:border-none dark:bg-[#212227]">
      <div className="flex flex-1 flex-col h-full">
        {post?.thumbnail ? (
          <RatioImage
            alt="img"
            widthRatio={1.644444444444444}
            heightRatio={1}
            src={post?.thumbnail}
            className="relative"
          />
        ) : (
          ''
        )}

        <div className="h-full justify-between flex flex-col">
          <div className="px-4">
            <span
              className={clsx(
                'text-[#4b4b4b] font-semibold text-[0.8125rem] dark:text-[#CFCFCF] truncate pt-[1rem]',
              )}>
              도서: {post?.bookInfo?.bookTitle ? post?.bookInfo?.bookTitle : '미선택'}
            </span>

            <PostTitle className="text-[#18191b] font-semibold text-base m-0 mb-[0.25rem] leading-normal mt-2 dark:text-[#CFCFCF]">
              {post?.title}
            </PostTitle>

            <PostBody className="text-sm mt-1 text-[#495057] dark:text-[#CFCFCF]">
              <div>{(post as any)?.postbody}</div>
            </PostBody>
          </div>

          {/* 
          <div className="flex justify-between mt-6 leading-normal text-[#2e2e2e] dark:text-[#CFCFCF] p-4">
            <div className="flex font-semibold text-xs items-center">
              <div className="mr-2">
                <div className="flex items-center">
                  <AiFillHeart />
                  <div className="ml-1">{post?.likes}개</div>
                </div>
              </div>
              <div className="flex items-center">
                <AiOutlineComment size="20" />

                <div className="ml-1">{post?.subs_count}개</div>
              </div>
            </div> */}

          <div className="flex justify-between mt-6 leading-normal text-[#2e2e2e] dark:text-[#CFCFCF] p-4">
            <div className="flex font-semibold text-xs">
              <span className="mr-2">좋아요 {post?.likes}개</span>
              <span>댓글 {post?.subs_count}개</span>
            </div>

            <span className="flex font-semibold text-xs text-[#2e2e2e] dark:text-[#CFCFCF]">
              {formatDate(post?.released_at)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );

  return <>{post?.thumbnail ? withThumbnail : withoutThumbnail}</>;
}

export function PostCardSkeleton({ hideUser }: PostCardSkeletonProps) {
  const { isdark } = useSelector((state: RootState) => state.core);
  const paddingTop = `${(1 / 1.644444444444444) * 100}%`;

  return (
    <>
      <div className="col-span-2 mxl:col-span-4 mmx:col-span-6 mxs:col-span-12 h-full relative w-full border border-stone-100 rounded-xl cursor-pointer transform  hover:translate-y-[-15px] transition duration-500 ease-in-out shadow-md hover:shadow-lg dark:border-none dark:bg-[#212227]">
        <div className="post-thumbnail">
          <Block
            isdark={isdark}
            style={{
              paddingTop,
            }}
            className="w-full h-full dark:bg-[#2b2d31]"
          />
        </div>
        <div className="ml-2 dark:text-[#1e293b]">
          <SkeletonTexts wordLengths={[2, 12]} isdark={isdark} />
        </div>

        <div className="ml-2 dark:text-[#1e293b]">
          <SkeletonTexts wordLengths={[2, 5, 2, 5]} isdark={isdark} />
          <SkeletonTexts wordLengths={[2, 4, 6, 6, 2, 4]} isdark={isdark} />
        </div>

        <div className="mt-3"></div>
        <div className="flex justify-between p-3">
          <Skeleton width="6em" marginRight="1rem" isdark={isdark} />
          <Skeleton width="3em" noSpacing isdark={isdark} />
        </div>
      </div>
    </>
  );
}

export default PostCardItem;

const WithoutPostTitle = styled.section`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: initial;
  word-wrap: break-word;
  overflow: hidden;
`;
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

const PostTitle = styled.section`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: initial;
  word-wrap: break-word;
  overflow: hidden;
`;

const PostCardBlock = styled.div`
  border: 1px solid red;
  display: grid;

  padding-top: 4rem;
  padding-bottom: 4rem;
  ${media.custom(768)} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  & > a {
    color: inherit;
    text-decoration: none;
  }
  &:first-child {
    padding-top: 0;
  }
  .user-info {
    display: flex;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      display: block;
      margin-right: 1rem;
      background: '#F8F9FA';
      object-fit: cover;
      border-radius: 1.5rem;
      box-shadow: 0px 0 8px rgba(0, 0, 0, 0.1);
      ${media.custom(768)} {
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
      }
    }
    .username {
      font-size: 0.875rem;
      color: #212529;
      font-weight: bold;
      a {
        color: inherit;
        text-decoration: none;
        &:hover {
          color: #343a40;
        }
      }
    }
    margin-bottom: 1.5rem;
    ${media.custom(768)} {
      margin-bottom: 0.75rem;
    }
  }
  .post-thumbnail {
    margin-bottom: 1rem;
  }
  line-height: 1.5;
  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: #212529;
    word-break: keep-all;
    ${media.custom(768)} {
      font-size: 1rem;
    }
  }
  p {
    margin-bottom: 2rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #495057;
    word-break: keep-all;
    overflow-wrap: break-word;
    ${media.custom(768)} {
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
    }
  }
  .subinfo {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: #868e96;
    font-size: 0.875rem;
    ${media.custom(768)} {
      font-size: 0.75rem;
    }
    span {
    }
    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
  .tags-wrapper {
    margin-bottom: -0.875rem;
    ${media.custom(768)} {
      margin-bottom: -0.5rem;
    }
  }
  & + & {
  }
`;

const SkeletonBlock = styled(PostCardBlock)`
  h2 {
    display: flex;
    margin-top: 1.375rem;
    margin-bottom: 0.375rem;
  }
  .user-thumbnail-skeleton {
    width: 3rem;
    height: 3rem;
    ${media.custom(768)} {
      width: 2rem;
      height: 2rem;
    }
  }
  .thumbnail-skeleton-wrapper {
    width: 100%;
    padding-top: 52.35%;
    position: relative;
    .skeleton {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .short-description {
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-size: 1rem;
    .line {
      display: flex;
    }
    .line + .line {
      margin-top: 0.5rem;
    }
  }
  .tags-skeleton {
    line-height: 1;
    font-size: 2rem;
    ${media.custom(768)} {
      font-size: 1.25rem;
    }
  }
`;
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

const Block = styled.span<{ noSpacing?: boolean; circle?: boolean; isdark: boolean }>`
  background: ${props => (props.isdark == 'dark' ? '#212227' : '#f1f3f5')};

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
