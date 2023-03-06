import PostTableOfContents from '../../components/common/PostTableOfContent';
import { PageLayout } from '../../components/layout/PageLayout';
import { parseHeadings2, setHeadingId } from '../../lib/heading';
import useGetPost from '../../components/write/hooks/useGetSinglePost';
import { NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo';
import { getNextSeo } from '../../lib/nextSeo';
import PawButton from '../../components/common/PawButton';
import styled, { keyframes, css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import Comments from '../../components/comments/Comments';
import {
  AppLayout,
  First,
  MainNav,
  Second,
  Third,
} from '../../components/layout/AppLayout';
import media from '../../lib/media';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  getBookInfoSuccess,
  getPostBody,
  getPostId,
  getPostTags,
  getPostTitle,
  getThumbnail,
} from '../../store/book';
import { Remove_Post } from '../../lib/graphql/posts';
import { useApolloClient, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import ProfileIcon from '../../svg/profile';
import { PostCardSkeletonProps } from '../../components/post/PostCardItem';
import { Skeleton, SkeletonTexts } from '../../components/common/Skeleton';
import Header from '../../components/base/Header';
import { formatDate } from '../../lib/utils';

export type PostProps = {
  id: string;
};

function Post() {
  const { singlePostLoding, singlePostError, singlePostData } = useGetPost();
  const router = useRouter();
  const dispatch = useDispatch();
  const insertID = setHeadingId(singlePostData?.post?.body);
  const { isdark } = useSelector((state: RootState) => state.core);
  const { auth } = useSelector((state: RootState) => state.auth);

  const id = router?.query?.id;
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

  return (
    <>
      <NextSeo {...getNextSeo({ title: 'Book Review Write', description: '책리뷰' })} />

      <PageLayout>
        {singlePostLoding && <PostCardSkeleton />}
        {singlePostData && !singlePostLoding ? (
          <AppLayout
            first={
              <First>
                <PostTitle className="text-[#212529] text-[2.5rem] max-w-[72rem] mx-auto font-bold px-[5rem] text-center my-[3rem] mxs:my-[2rem] mxs:max-w-[100%]  dark:text-[#ececec] mmx:text-[2rem] mmx:px-[3rem]  mxs:px-[1rem] mxs:text-[1.5rem]">
                  {singlePostData?.post?.title}
                </PostTitle>

                <div className="flex justify-center items-center text-[#212529] dark:text-[#ececec] mb-[1rem]">
                  <div className="text-lg font-medium">
                    <div className="flex items-center">
                      {singlePostData?.post?.user?.profile?.thumbnail ? (
                        <Img
                          profileThumbnail={
                            singlePostData?.post?.user?.profile?.thumbnail
                          }
                          className="w-[48px] h-[48px] rounded-[50%] object-cover block mxs:w-[40px] mxs:h-[40px]"
                        />
                      ) : (
                        <ProfileIcon className="w-[42px] h-[42px] rounded-[50%] object-cover block mxs:w-[40px] mxs:h-[40px]" />
                      )}

                      <div className="ml-2">
                        {singlePostData?.post?.user?.profile?.profile_name
                          ? singlePostData?.post?.user?.profile?.profile_name
                          : singlePostData?.post?.user?.username}
                      </div>
                    </div>
                  </div>
                  <div className="mx-[0.75rem]  font-bold text-[#64748b] text-lg">·</div>
                  <div className="text-lg text-[#344155] dark:text-[#ececec]">
                    {formatDate(singlePostData?.post?.released_at)}
                  </div>
                </div>

                {singlePostData?.post?.user?.id == auth?.id ? (
                  <div className="flex justify-end max-w-[812.5px] mx-auto text-[#868E96] text-sm mt-2 mb-[1rem]">
                    <Link href={`/write`} passHref>
                      <div onClick={getPostData} className="mr-4 cursor-pointer">
                        수정
                      </div>
                    </Link>

                    <div
                      className="cursor-pointer"
                      onClick={() => handleSubmit(router?.query?.id)}>
                      삭제
                    </div>
                  </div>
                ) : (
                  ''
                )}

                <div className="flex justify-start max-w-[812.5px] mx-auto text-[#868E96] text-sm mt-8 mb-[0.5rem] flex-wrap">
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
                <div className="grid grid-cols-10 max-w-[96rem] mx-auto gap-[1.5rem] mp:grid-cols-8 mp:max-w-[1280px]">
                  <div className="col-span-2 justify-self-center mp:col-span-1 mmd:hidden">
                    <div className="sticky top-[20%]">
                      <PawButton id={id} isdark={isdark} auth={auth} />
                    </div>
                  </div>

                  <div className="col-span-6 w-full max-w-[812.5px] mx-auto mmd:col-span-8">
                    {singlePostData?.post?.bookInfo?.bookTitle ? (
                      <div className="flex max-w-[812.5px] mx-auto bg-[#F8F9FA] py-8 px-8 rounded shadow dark:bg-[#2b2d31] ssm:flex-col mb-[2rem]">
                        <div className="card">
                          <div className="imgBox">
                            <div className="bark "></div>
                            <img
                              src={singlePostData?.post?.bookInfo?.bookUrl}
                              width="120px"
                              height="174px"
                            />
                          </div>
                          <div className="details">
                            <h4 className="text-[10px]">
                              {singlePostData?.post?.bookInfo?.bookContent}
                            </h4>
                          </div>
                        </div>
                        <div className="flex flex-col ml-8 ssm:ml-0 ssm:mt-2">
                          <div className="text-[#495057] text-xl font-bold dark:text-[#ececec] mxs:text-base">
                            도서: {singlePostData?.post?.bookInfo?.bookTitle}
                          </div>
                          <div className="text-[#495057] text-base font-semibold mt-2 dark:text-[#ececec]">
                            저자:{' '}
                            {singlePostData?.post?.bookInfo?.bookAuthors?.map(e => e)}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}

                    <div>
                      <img src={singlePostData?.post?.thumbnail} />
                    </div>
                    <Content isdark={isdark}>
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
                <div className="max-w-[812.5px] mx-auto">
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

export default Post;

function PostCardSkeleton({ hideUser }: PostCardSkeletonProps) {
  const paddingTop = `${(1 / 1.644444444444444) * 100}%`;
  const { isdark } = useSelector((state: RootState) => state.core);

  return (
    <>
      <AppLayout
        first={
          <First>
            <PostTitle className="text-[#212529] text-[2.5rem] max-w-[72rem] mx-auto font-bold px-[5rem] text-center my-[3rem] mxs:my-[2rem] mxs:max-w-[100%]  dark:text-[#ececec] mmx:text-[2rem] mmx:px-[3rem]  mxs:px-[1rem] mxs:text-[1.5rem]">
              <SkeletonTexts wordLengths={[10, 12]} isdark={isdark} />
            </PostTitle>

            <div className="flex justify-center items-center text-[#212529] dark:text-[#ececec] mb-[1rem]">
              <div className="text-lg font-medium">
                <div className="flex items-center flex-wrap">
                  <Skeleton width="6em" marginRight="1rem" isdark={isdark} />
                </div>
              </div>
              <div className="mx-[0.75rem]  font-bold text-[#64748b] text-lg">·</div>
              <div className="text-lg text-[#344155] dark:text-[#ececec]">
                <Skeleton width="6em" marginRight="1rem" isdark={isdark} />
              </div>
            </div>
          </First>
        }
        second={
          <Second>
            <div className="grid grid-cols-10 max-w-[96rem] mx-auto gap-[1.5rem] mp:grid-cols-8 mp:max-w-[1280px]">
              <div className="col-span-2 justify-self-center mp:col-span-1 mmd:hidden"></div>

              <div className="col-span-6 w-full max-w-[812.5px] mx-auto mmd:col-span-8">
                <SkeletonTexts wordLengths={[4, 4, 4, 4, 4]} isdark={isdark} />

                <Skeleton noSpacing={true} width="100%" height="20vh" isdark={isdark} />

                <div className="py-1">
                  <SkeletonTexts
                    isdark={isdark}
                    wordLengths={[4, 4, 4, 4, 4, 7, 5, 2, 4, 5]}
                  />
                </div>
                <div className="py-1">
                  <SkeletonTexts
                    isdark={isdark}
                    wordLengths={[
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                    ]}
                  />
                </div>
                <div className="py-1">
                  <SkeletonTexts
                    isdark={isdark}
                    wordLengths={[
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                    ]}
                  />
                </div>
                <div className="py-1">
                  <SkeletonTexts
                    isdark={isdark}
                    wordLengths={[
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                      Math.floor(Math.random() * 10),
                    ]}
                  />
                </div>
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
    }
    ${media.custom(768)} {
      margin: 24px 0;
    }

    &:before {
      color: #fcd545;
      font-size: 100px;
      font-family: 'Comic Sans MS', 'Comic Sans', cursive;
      line-height: 0.9;
      content: open-quote;
      vertical-align: top;

      position: absolute;
      left: -5px;
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
