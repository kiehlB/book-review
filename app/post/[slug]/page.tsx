// import { PageLayout } from '@/components/layout/page-layout';
// import PostDetailClient from '../post.client';
// import { getClient } from '@/lib/client';
// import { GET_Post } from '@/lib/graphql/posts';

// async function PostDetail({ params }: { params: { slug: string } }) {
//   const Id = params?.slug;
//   const PostData = await getClient().query({
//     query: GET_Post,
//     variables: { id: Id },
//   });

//   console.log(PostData?.data);

//   return (
//     <PageLayout>
//       <PostDetailClient singlePostData={PostData?.data} id={Id} />
//     </PageLayout>
//   );
// }

// export default PostDetail;

'use client';

import { useRouter, usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import useGetPost from '@/components/write/hooks/useGetSinglePost';
import { useDispatch, useSelector } from 'react-redux';
import { setHeadingId } from '@/lib/heading';
import { RootState } from '@/store/rootReducer';
import {
  getBookInfoSuccess,
  getPostBody,
  getPostId,
  getPostTags,
  getPostTitle,
  getThumbnail,
} from '@/store/book';
import { useApolloClient, useMutation } from '@apollo/client';
import { Remove_Post } from '@/lib/graphql/posts';
import { toast } from 'react-toastify';
import { PageLayout } from '@/components/layout/page-layout';
import { AppLayout, First, Second, Third } from '@/components/layout/app-layout';
import ProfileIcon from '@/svg/profile';
import { formatDate } from '@/lib/utils';
import styled, { keyframes, css } from 'styled-components';
import media from '@/lib/media';
import PostTableOfContents from '@/components/table-of-content';
import Comments from '@/components/comments/comments';
import usePostLike from '@/components/post-grid/hooks/usePostLike';
import PawButton from '@/components/like-button';
import { Skeleton, SkeletonTexts } from '@/components/skeleton';

export type PostProps = {
  id: string;
};

function PostDetail() {
  const { singlePostLoding, singlePostError, singlePostData } = useGetPost();
  const router = useRouter();
  const params = useParams();
  const dispatch = useDispatch();
  const insertID = setHeadingId(singlePostData?.post?.body);
  const { isdark } = useSelector((state: RootState) => state.core);
  const { auth } = useSelector((state: any) => state.auth);
  const id = params.slug;

  const { data, onLikeToggle, loading } = usePostLike({ id });

  const BodyResult = insertID.replace('<toc></toc>', '');
  singlePostData?.post?.bookInfo;

  const getPostData = () => {
    dispatch(getPostTitle(singlePostData?.post?.title));
    dispatch(getPostBody(singlePostData?.post?.body));
    dispatch(getPostTags(singlePostData?.post?.tags?.map(e => e?.tag?.name)));
    dispatch(getPostId(singlePostData?.post?.id));
    dispatch(getThumbnail(singlePostData?.post?.thumbnail));
    dispatch(
      getBookInfoSuccess({
        authors: singlePostData?.post?.bookInfo?.bookAuthors,
        contents: singlePostData?.post?.bookInfo?.bookContent,
        datetime: singlePostData?.post?.bookInfo?.bookAuthors,
        isbn: singlePostData?.post?.bookInfo?.bookIsbn,
        thumbnail: singlePostData?.post?.bookInfo?.bookUrl,
        title: singlePostData?.post?.bookInfo?.bookTitle,
      }),
    );
  };

  const [removePost] = useMutation(Remove_Post, {
    onCompleted({}) {
      router.push('/');
    },
  });

  const client = useApolloClient();

  const handleSubmit = async id => {
    if (id) {
      try {
        await removePost({
          variables: {
            id: id,
          },
        });
        await client.resetStore();
      } catch (e) {
        toast.error('포스트 삭제 실패', {
          position: 'bottom-right',
        });
      }
    }
  };

  // if (loading) return null;

  return (
    <>
      <PageLayout>
        {singlePostLoding && <PostCardSkeleton />}
        {singlePostData && !singlePostLoding ? (
          <AppLayout
            first={
              <First>
                <PostTitle className="mx-auto my-[3rem] max-w-[72rem] px-[5rem] text-center text-[2.5rem] font-bold text-[#212529] dark:text-[#ececec] mmx:px-[3rem]  mmx:text-[2rem] mxs:my-[2rem] mxs:max-w-[100%]  mxs:px-[0rem] mxs:text-[1.5rem]">
                  {singlePostData?.post?.title}
                </PostTitle>

                <div className="mb-[1rem] flex items-center justify-center text-[#212529] dark:text-[#ececec]">
                  <div className="text-lg font-medium">
                    <div className="flex items-center">
                      {singlePostData?.post?.user?.profile?.thumbnail ? (
                        <Img
                          profileThumbnail={
                            singlePostData?.post?.user?.profile?.thumbnail
                          }
                          className="block h-[48px] w-[48px] rounded-[50%] object-cover mxs:h-[40px] mxs:w-[40px]"
                        />
                      ) : (
                        <ProfileIcon className="block h-[42px] w-[42px] rounded-[50%] object-cover mxs:h-[40px] mxs:w-[40px]" />
                      )}

                      <div className="ml-2">
                        {singlePostData?.post?.user?.profile?.profile_name
                          ? singlePostData?.post?.user?.profile?.profile_name
                          : singlePostData?.post?.user?.username}
                      </div>
                    </div>
                  </div>
                  <div className="mx-[0.75rem]  text-lg font-bold text-[#64748b]">·</div>
                  <div className="text-lg text-[#344155] dark:text-[#ececec]">
                    {formatDate(singlePostData?.post?.released_at)}
                  </div>
                </div>

                {singlePostData?.post?.user?.id == auth?.id ? (
                  <div className="mx-auto mb-[1rem] mt-2 flex max-w-[812.5px] justify-end text-sm text-[#868E96]">
                    <Link href={`/write`} passHref>
                      <div onClick={getPostData} className="mr-4 cursor-pointer">
                        수정
                      </div>
                    </Link>

                    <div className="cursor-pointer" onClick={() => handleSubmit(id)}>
                      삭제
                    </div>
                  </div>
                ) : (
                  ''
                )}

                <div className="mx-auto mb-[0.5rem] mt-8 flex max-w-[812.5px] flex-wrap justify-start text-sm text-[#868E96]">
                  <div className="flex flex-wrap">
                    {singlePostData?.post?.tags.map(tag => (
                      <Tag className="mr-2 flex flex-wrap" key={tag.name}>
                        {tag?.tag?.name}
                      </Tag>
                    ))}
                  </div>
                </div>
              </First>
            }
            second={
              <Second>
                <div className="mx-auto grid max-w-[96rem] grid-cols-10 gap-[1.5rem] mp:max-w-[1280px] mp:grid-cols-8">
                  <div className="col-span-2 justify-self-center mp:col-span-1 mmd:hidden">
                    <div className="sticky top-[20%]">
                      <PawButton
                        id={id}
                        isdark={isdark}
                        auth={auth}
                        data={data}
                        onLikeToggle={onLikeToggle}
                      />
                    </div>
                  </div>

                  <div className="col-span-6 mx-auto w-full max-w-[812.5px] mmd:col-span-8">
                    {singlePostData?.post?.bookInfo?.bookTitle ? (
                      <div className="mx-auto mb-[1rem] flex max-w-[812.5px] rounded bg-[#F8F9FA] px-8 py-8 shadow dark:bg-[#2b2d31] ssm:flex-col">
                        <div className="card">
                          <div className="imgBox">
                            <div className="bark "></div>
                            <Image
                              alt="book"
                              src={singlePostData?.post?.bookInfo?.bookUrl}
                              width={120}
                              height={174}
                            />
                          </div>
                          <div className="details">
                            <h4 className="text-[10px]">
                              {singlePostData?.post?.bookInfo?.bookContent}
                            </h4>
                          </div>
                        </div>
                        <div className="ml-8 flex flex-col ssm:ml-0 ssm:mt-2">
                          <div className="text-xl font-bold text-[#495057] dark:text-[#ececec] mxs:text-base">
                            도서: {singlePostData?.post?.bookInfo?.bookTitle}
                          </div>
                          <div className="mt-2 text-base font-semibold text-[#495057] dark:text-[#ececec]">
                            저자:
                            {singlePostData?.post?.bookInfo?.bookAuthors?.map(e => e)}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                    {singlePostData?.post?.thumbnail ? (
                      <div className="mx-auto my-12 flex max-w-full justify-center">
                        <div className="flex justify-center">
                          <img
                            className="h-auto max-w-full"
                            src={singlePostData?.post?.thumbnail}
                            alt="..."
                          />
                        </div>
                      </div>
                    ) : (
                      ''
                    )}

                    <Content isdark={isdark} id="content">
                      <div dangerouslySetInnerHTML={{ __html: BodyResult }} />
                    </Content>
                  </div>
                  <div className="col-span-2 mp:hidden">
                    <div className="sticky top-[20%]">
                      <PostTableOfContents isdark={isdark} />
                    </div>
                  </div>
                </div>
              </Second>
            }
            third={
              <Third>
                <div className="mx-auto max-w-[812.5px]">
                  <Comments
                    commentCount={singlePostData?.post?.subs_count}
                    comments={singlePostData?.post?.subs}
                    postId={singlePostData?.post?.id}
                    isMine={singlePostData?.post?.user?.id == auth?.id}
                    currentId={auth?.id}
                  />
                </div>
                <div className="h-[40vh]"></div>
              </Third>
            }
          />
        ) : (
          ''
        )}
      </PageLayout>
    </>
  );
}

export default PostDetail;

function PostCardSkeleton() {
  const { isdark } = useSelector((state: RootState) => state.core);

  return (
    <>
      <AppLayout
        first={
          <First>
            <PostTitle className="mx-auto my-[3rem] max-w-[72rem] px-[5rem] text-center text-[2.5rem] font-bold text-[#212529] dark:text-[#ececec] mmx:px-[3rem]  mmx:text-[2rem] mxs:my-[2rem] mxs:max-w-[100%]  mxs:px-[1rem] mxs:text-[1.5rem]">
              <SkeletonTexts wordLengths={[10, 12]} isdark={isdark} />
            </PostTitle>

            <div className="mb-[1rem] flex items-center justify-center text-[#212529] dark:text-[#ececec]">
              <div className="text-lg font-medium">
                <div className="flex flex-wrap items-center">
                  <Skeleton width="6em" marginRight="1rem" isdark={isdark} />
                </div>
              </div>
              <div className="mx-[0.75rem]  text-lg font-bold text-[#64748b]">·</div>
              <div className="text-lg text-[#344155] dark:text-[#ececec]">
                <Skeleton width="6em" marginRight="1rem" isdark={isdark} />
              </div>
            </div>
          </First>
        }
        second={
          <Second>
            <div className="mx-auto grid max-w-[96rem] grid-cols-10 gap-[1.5rem] mp:max-w-[1280px] mp:grid-cols-8">
              <div className="col-span-2 justify-self-center mp:col-span-1 mmd:hidden"></div>

              <div className="col-span-6 mx-auto w-full max-w-[812.5px] mmd:col-span-8">
                <SkeletonTexts wordLengths={[4, 4, 4, 4, 4]} isdark={isdark} />

                <Skeleton noSpacing={true} width="100%" height="20vh" isdark={isdark} />

                <div className="py-1">
                  <SkeletonTexts
                    isdark={isdark}
                    wordLengths={[4, 4, 4, 4, 4, 7, 5, 2, 4, 5]}
                  />
                </div>
                {[...Array(3)].map((_, i) => (
                  <div className="py-1" key={i}>
                    <SkeletonTexts
                      isdark={isdark}
                      wordLengths={[...Array(16)].map(() =>
                        Math.floor(Math.random() * 10),
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Second>
        }
      />
    </>
  );
}

const PostTitle = styled.section`
  display: -webkit-box;
  line-height: 1.5;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: initial;
  word-wrap: break-word;
  overflow: hidden;
  height: 100%;
`;

const Content = styled.div<{ isdark: string }>`
  iframe {
    border-radius: 4px;
    min-width: 280px;
    min-height: 280px;
    display: block;
    outline: 0px solid transparent;
  }

  div[data-youtube-video] > iframe {
    cursor: move;
    aspect-ratio: 16 / 9;
    width: 100%;
  }

  .ProseMirror-selectednode iframe {
    transition: outline 0.15s;
    outline: 6px solid #fbbf24;
  }

  @media only screen and (max-width: 480px) {
    div[data-youtube-video] > iframe {
      max-height: 50px;
    }
  }

  @media only screen and (max-width: 720px) {
    div[data-youtube-video] > iframe {
      max-height: 100px;
    }
  }

  white-space: initial;
  word-wrap: break-word;
  margin-top: 1rem;
  color: ${props => (props.isdark == 'dark' ? '#ececec' : '#212529')};
  span {
    color: ${props => (props.isdark == 'dark' ? '#ececec' : '#212529')};
  }
  a {
    white-space: initial;
    word-wrap: break-word;
  }

  img {
    height: 100%;
    max-width: 100%;
    object-fit: cover;

    &.ProseMirror-selectednode {
      outline: 3px solid #68cef8;
    }
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.5;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
    letter-spacing: -0.004em;
    color: ${props => (props.isdark == 'dark' ? '#ececec' : '#212529')};
    ${media.custom(1024)} {
      font-size: 2.2rem;
    }
    ${media.custom(768)} {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
    letter-spacing: -0.004em;
    color: ${props => (props.isdark == 'dark' ? '#ececec' : '#212529')};
    ${media.custom(1024)} {
      font-size: 1.75rem;
    }
  }
  h3 {
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    letter-spacing: -0.004em;
    color: ${props => (props.isdark == 'dark' ? '#ececec' : '#212529')};
    ${media.custom(1024)} {
      font-size: 1.25rem;
    }
  }
  h4 {
    font-size: 1.3125rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    letter-spacing: -0.004em;
    margin-top: 1.5rem;
    color: ${props => (props.isdark == 'dark' ? '#ececec' : '#212529')};
    ${media.custom(1024)} {
      font-size: 1rem;
    }
  }

  min-height: 100%;
  max-height: 100%;
  width: 100%;
  ol {
    list-style-type: decimal;
    position: relative;
    color: #ffb300;
    font-weight: 600;
    padding-left: 20px;
    font-size: 1.125rem;
    margin: 18px 0;

    li {
      line-height: 1.5;
      vertical-align: middle;
    }

    li p {
      vertical-align: middle;
      padding-bottom: 5px;
    }
  }

  ul {
    list-style-type: disc;
    position: relative;
    color: #ffb300;
    margin: 18px 0;
    padding-left: 20px;
    font-size: 1.125rem;

    vertical-align: middle;

    li {
      line-height: 1.5;
      vertical-align: middle;
    }

    li p {
      vertical-align: middle;
      padding-bottom: 5px;
    }
  }

  code {
    background-color: #ffe066;
    color: #212529;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 90%;

    letter-spacing: 0px;
  }
  div {
    .toc {
      margin-bottom: 1.5rem;
    }
    color: ${props => (props.isdark == 'dark' ? '#ececec' : '#212529')};

    .toc__list::before {
      color: ${props => (props.isdark == 'dark' ? 'white' : '')};
    }
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    margin: 0.75rem 0rem;
    overflow-x: auto;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  .quote {
    margin: 0 auto;
    position: relative;
    padding-left: 55px;
    margin: 72px 0;

    ${media.custom(1024)} {
      margin: 32px 0;
      padding-left: 40px;
    }
    ${media.custom(768)} {
      margin: 24px 0;
    }

    &:before {
      color: #fcd545;
      font-size: 100px;
      ${media.custom(1024)} {
        font-size: 80px;
      }
      ${media.custom(768)} {
        font-size: 70px;
      }
      font-family: 'Comic Sans MS', 'Comic Sans', cursive;
      line-height: 0.9;
      content: open-quote;
      vertical-align: top;

      position: absolute;
      left: -5px;
      ${media.custom(768)} {
        left: 0px;
      }
    }
    &:after {
      visibility: hidden;
      content: close-quote;
    }
  }

  hr {
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 1.5rem 0;
  }

  .ptag {
    font-size: 1.125rem;
    ${media.custom(768)} {
      font-size: 1rem;
    }
    line-height: 1.7;
    letter-spacing: -0.004em;

    display: block;
    font-family: 'Noto Sans KR', 'Nanum Gothic', 'Roboto', 'Helvetica Neue', Arial,
      sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: ${props => (props.isdark == 'dark' ? '#CFCFCF' : '#333')};

    word-break: break-all;
  }

  u {
    text-decoration: none;

    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      linear-gradient(to right, #e9756b, #e9756b, #e9756b);
    background-size: 100% 0.1em, 30% 0.1em;
    background-position: 100% 100%, 0 100%;

    background-repeat: no-repeat;
    transition: background-size 600ms;
    &:hover {
      background-size: 100% 0.1em, 100% 0.1em;
    }
  }
`;

const Tag = styled.div`
  color: #121212;

  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  height: 2rem;
  border-radius: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background: #fcd545;
  margin-right: 0.75rem;
  transition: ease-in 0.125s;

  margin-bottom: 0.75rem;
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

const Img = styled.img<{ profileThumbnail: string }>`
  background-image: url(${props => props.profileThumbnail});
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
  background-size: cover;

  background-position: center;
`;
