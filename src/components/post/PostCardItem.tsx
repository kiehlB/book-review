import clsx from 'clsx';
import moment from 'moment';
import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
import media from '../../lib/media';
import { Post } from '../../types/apolloComponent';
import RatioImage from '../common/RatioImage';

interface GridProps {
  post: Post;
}
export type PostCardSkeletonProps = {
  hideUser?: boolean;
};

function PostCardItem({ post }: GridProps) {
  const body = post?.body.replace(/<[^>]+>/g, ' ');

  const withoutThumbnail = (
    <Link
      href={`/post/${post.id}`}
      className="col-span-2 mxl:col-span-4 mmx:col-span-6 mxs:col-span-12 h-full text-black relative w-full border border-stone-100 rounded-xl cursor-pointer transform  hover:translate-y-[-15px] transition duration-500 ease-in-out shadow-md hover:shadow-lg dark:border-none dark:bg-[#212227]">
      <div className="flex flex-1 flex-col h-full">
        <div className="h-full justify-between flex flex-col">
          <div className="px-4">
            <div
              className={clsx(
                'text-[#4b4b4b] font-semibold text-[0.8125rem] dark:text-[#e6e8ea] truncate pt-[1rem]',
              )}>
              도서: {post?.bookInfo?.bookTitle ? post?.bookInfo?.bookTitle : '미선택'}
            </div>

            <WithoutPostTitle className="text-[#18191b] font-semibold text-base m-0 mb-[0.25rem] leading-normal mt-2 dark:text-[#e6e8ea]">
              {post?.title}
            </WithoutPostTitle>

            <WithoutPostBody className="text-sm mt-2 text-[#495057] dark:text-[#e4e5e7]">
              <div>{body}</div>
            </WithoutPostBody>
          </div>

          <div className="flex justify-between mt-6 leading-normal text-[#2e2e2e] dark:text-[#929aa5] p-4">
            <div className="flex font-semibold text-xs">
              <div className="mr-2">좋아요 {post?.likes}개</div>
              <div>댓글 {post?.subs_count}개</div>
            </div>

            <div className="flex font-semibold text-xs text-[#2e2e2e] dark:text-[#929aa5] ">
              {moment(post?.released_at).fromNow()}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

  const withThumbnail = (
    <Link
      href={`/post/${post.id}`}
      className="col-span-2 mxl:col-span-4 mmx:col-span-6 mxs:col-span-12 h-full text-black relative w-full border border-stone-100 rounded-xl cursor-pointer transform  hover:translate-y-[-15px] transition duration-500 ease-in-out shadow-md hover:shadow-lg dark:border-none dark:bg-[#1E1E1E]">
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
            <div
              className={clsx(
                'text-[#4b4b4b] font-semibold text-[0.8125rem] dark:text-[#e6e8ea] truncate pt-[1rem]',
              )}>
              도서: {post?.bookInfo?.bookTitle ? post?.bookInfo?.bookTitle : '미선택'}
            </div>

            <PostTitle className="text-[#18191b] font-semibold text-base m-0 mb-[0.25rem] leading-normal mt-2 dark:text-[#e6e8ea]">
              {post?.title}
            </PostTitle>

            <PostBody className="text-sm mt-1 text-[#495057] dark:text-[#e4e5e7]">
              <div>{body}</div>
            </PostBody>
          </div>

          <div className="flex justify-between mt-6 leading-normal text-[#2e2e2e] dark:text-[#929aa5] p-4">
            <div className="flex font-semibold text-xs">
              <div className="mr-2">좋아요 {post?.likes}개</div>
              <div>댓글 {post?.subs_count}개</div>
            </div>

            <div className="flex font-semibold text-xs text-[#2e2e2e] dark:text-[#929aa5] ">
              {moment(post?.released_at).fromNow()}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

  return <>{post?.thumbnail ? withThumbnail : withoutThumbnail}</>;
}

export function PostCardSkeleton({ hideUser }: PostCardSkeletonProps) {
  return (
    <></>
    // <SkeletonBlock>
    //   {!hideUser && (
    //     <div className="user-info">
    //       <Skeleton className="user-thumbnail-skeleton" circle marginRight="1rem" />
    //       <div className="username">
    //         <Skeleton width="5rem" />
    //       </div>
    //     </div>
    //   )}
    //   <div className="post-thumbnail">
    //     <div className="thumbnail-skeleton-wrapper">
    //       <Skeleton className="skeleton" />
    //     </div>
    //   </div>
    //   <h2>
    //     <SkeletonTexts wordLengths={[4, 3, 2, 5, 3, 6]} useFlex />
    //   </h2>
    //   <div className="short-description">
    //     <div className="line">
    //       <SkeletonTexts wordLengths={[2, 4, 3, 6, 2, 7]} useFlex />
    //     </div>
    //     <div className="line">
    //       <SkeletonTexts wordLengths={[3, 2, 3, 4, 7, 3]} useFlex />
    //     </div>
    //     <div className="line">
    //       <SkeletonTexts wordLengths={[4, 3, 3]} />
    //     </div>
    //   </div>
    //   <div className="tags-skeleton">
    //     <Skeleton width="6rem" marginRight="0.875rem" />
    //     <Skeleton width="4rem" marginRight="0.875rem" />
    //     <Skeleton width="5rem" noSpacing />
    //   </div>
    //   <div className="subinfo">
    //     <Skeleton width="3em" marginRight="1rem" />
    //     <Skeleton width="6em" noSpacing />
    //   </div>
    // </SkeletonBlock>
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

const TagB = styled.section`
  position: absolute;
  margin: -3.2rem -0px;
  height: 1.375rem;
  background-color: #1fb6ff;
  line-height: 22px;
  font-size: 12px;
  font-weight: 500;
  padding: 0px 5px 0px 5px;
  color: white;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagBlock = styled.section`
  margin-top: 1rem;
  position: absolute;
  height: 1.375rem;
  background-color: #1fb6ff;
  line-height: 22px;
  font-size: 12px;
  font-weight: 500;
  padding: 0px 5px 0px 5px;
  color: white;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ByWho = styled.section`
  font-size: 1rem;
  line-height: 1.5rem;
  color: #3c4858;
  margin-top: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostButtonWrapper = styled.section`
  margin-bottom: 2rem;
  padding: 0rem 1.5rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
`;
const WithoutPostButtonWrapper = styled.section`
  padding: 0 1.5rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 2rem;
  justify-content: flex-end;
`;

const Author = styled.section`
  display: flex;
  color: #3c4858;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: initial;
  word-wrap: break-word;
  overflow: hidden;
`;

const AuthorText = styled.section`
  margin-left: 0.8rem;
`;

const PostCardBlock = styled.div`
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
