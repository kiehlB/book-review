import * as React from 'react';
import styled from 'styled-components';
import media from '../../lib/media';
import RatioImage from '../common/RatioImage';

interface GridProps {
  post: any;
}
export type PostCardSkeletonProps = {
  hideUser?: boolean;
};

function PostCardItem({ post }: GridProps) {
  return (
    <div className="col-span-2 h-[20rem] mxl:col-span-4">
      <div className="w-full">
        <RatioImage
          alt="img"
          widthRatio={1.644444444444444}
          heightRatio={1}
          src="/test.jpg"
          className="relative"
        />
        <div className="text-[#121212] font-semibold leading-6 text-lg py-[1rem]">
          {post.title}
        </div>
        {/* <div className="text-[#2E2E2E] text-sm pb-[1rem]">
          <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
        </div> */}
        <div className="flex justify-between">
          <div className="flex text-[#121212] font-semibold text-xs">
            <div>좋아요 4개</div>
            <div>댓글 5개</div>
          </div>

          <div className="flex text-[#121212] font-semibold text-xs">
            <div>by 웅</div>
            <div>2 개월전</div>
          </div>
        </div>
      </div>
    </div>
  );
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

const C = styled.section`
  box-shadow: 0px 10px 20px rgba(34, 45, 65, 0.05), 0px 0px 2px rgba(0, 0, 0, 0.13);
  background-color: #fff;
  border-radius: 15px;
  transition: all 0.5s ease;
  &: hover {
    box-shadow: 0 5px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-15px);
    cursor: pointer;
    opacity: 1;
  }
`;

const ContentImg = styled.img`
  width: 100%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

const PostContent = styled.section`
  margin-top: 2.5rem;
  padding: 0rem 1.5rem;
`;

const FlexWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const WithFlexWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 21.875rem;
`;

const WithoutPostBody = styled.section`
  color: #3c4858;
  font-weight: 500;
  display: block;
  margin-top: 4rem;
  max-height: 20.4375rem;
  display: -webkit-box;
  line-height: 1.5rem;
  -webkit-line-clamp: 9;
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
  font-size: 1.625rem;
  line-height: 2.125rem;
  color: #1f2d2d;
  display: -webkit-box;
  font-weight: 600;
  color: #1f2d3d;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: initial;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 6.375rem;
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

const PostBody = styled.section`
  line-height: 24px;
  color: #3c4858;
  font-weight: 500;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  height: 6rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
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
