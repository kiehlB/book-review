'use client';

import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import useGetPost from '../post/hooks/use-get-single-post';
import useGetPostView from '../post/hooks/use-get-post-view';
import { PageLayout } from '@/components/layout/page-layout';
import { AppLayout, First, Second, Third } from '@/components/layout/app-layout';
import { ProfileIcon } from '@/components/icons';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import PostTableOfContents from '@/components/table-of-content';
import PostAuthControl from './post-auth-control';
import Comments from '../comments/comments';
import PawButton from '@/components/like-button';
import { Suspense } from 'react';
import useGetUser from '../setting/hooks/use-get-user';
import { shortenID } from '@/lib/temporary-id';

export type PostProps = {
  header_url: string;
};

function PostPageViewWrapper({ header_url }: PostProps) {
  const { getUser } = useGetUser();
  const auth = getUser?.whoami?.id;
  const pathSegments = header_url.split('/');
  const desiredSegment = pathSegments[pathSegments.length - 1];
  const { singlePostData, handleRefetch } = useGetPost(desiredSegment);
  const id = desiredSegment;
  const {} = useGetPostView(id);
  const username =
    singlePostData?.post?.user?.profile?.profile_name ||
    singlePostData?.post?.user?.username ||
    shortenID(singlePostData?.post?.user?.id || '');
  return (
    <>
      <div className="mx-auto my-[3rem] line-clamp-3  h-full max-w-[72rem] px-[5rem] text-center text-[2.5rem] font-bold leading-normal text-[#212529] dark:text-[#ececec] mms:px-[3rem]  mms:text-[2rem] mxs:my-[2rem] mxs:max-w-[100%]  mxs:px-[0rem] mxs:text-[1.5rem]">
        {singlePostData?.post?.title}
      </div>

      <div className="mb-[1rem] flex items-center justify-center text-[#212529] dark:text-[#ececec]">
        <div className="text-lg font-medium">
          <div className="flex items-center">
            {singlePostData?.post?.user?.profile?.thumbnail ? (
              <Image
                src={singlePostData?.post?.user?.profile?.thumbnail}
                width={48}
                alt="profile"
                height={48}
                fill
                className="block h-[48px] w-[48px] rounded-[50%] object-cover mxs:h-[40px] mxs:w-[40px]"
              />
            ) : (
              <ProfileIcon className="block h-[42px] w-[42px] rounded-[50%] object-cover mxs:h-[40px] mxs:w-[40px]" />
            )}

            <div className="ml-2">{username}</div>
          </div>
        </div>
        <div className="mx-[0.75rem]  text-lg font-bold text-[#64748b]">·</div>
        <div className="text-lg text-[#344155] dark:text-[#ececec]">
          {formatDate(singlePostData?.post?.released_at)}
        </div>
      </div>

      <PostAuthControl id={id} auth={auth!} singlePostData={singlePostData} />

      <div className="mx-auto mb-[0.5rem] mt-8 flex max-w-[812.5px] flex-wrap justify-start text-sm text-[#868E96]">
        <div className="flex flex-wrap">
          {singlePostData?.post?.tags
            ? singlePostData?.post?.tags.map((tag: any) => (
                <div
                  className="duration-125 mb-3 mr-2 flex h-8 flex-wrap items-center rounded-full bg-[#fcd545] px-4 text-base text-[#121212] transition ease-in"
                  key={tag?.id}>
                  {tag?.tag?.name}
                </div>
              ))
            : ''}
        </div>
      </div>
      <div className="mx-auto grid max-w-[96rem] grid-cols-10 gap-[1.5rem] mx2:max-w-[1280px] mx2:grid-cols-8">
        <div className="col-span-2 justify-self-center mx2:col-span-1 mmd:hidden">
          <div className="sticky top-[20%]">
            <PawButton id={id} auth={auth} />
          </div>
        </div>

        <div className="col-span-6 mx-auto w-full max-w-[812.5px] mmd:col-span-8">
          {singlePostData?.post?.bookInfo?.bookTitle ? (
            <div className="mx-auto mb-[1rem] flex max-w-[812.5px] rounded bg-[#F8F9FA] px-8 py-8 shadow dark:bg-dark-400 mxx:flex-col">
              <div className="card">
                <div className="imgBox">
                  <div className="bark "></div>
                  {singlePostData?.post?.bookInfo?.bookUrl ? (
                    <Image
                      alt="book"
                      src={singlePostData?.post?.bookInfo?.bookUrl}
                      width={120}
                      height={174}
                    />
                  ) : (
                    ''
                  )}
                </div>
                <div className="details">
                  <h4 className="text-[10px]">
                    {singlePostData?.post?.bookInfo?.bookContent}
                  </h4>
                </div>
              </div>
              <div className="ml-8 flex flex-col mxx:ml-0 mxx:mt-2">
                <div className="text-xl font-bold text-[#495057] dark:text-[#ececec] mxs:text-base">
                  도서: {singlePostData?.post?.bookInfo?.bookTitle}
                </div>
                <div className="mt-2 text-base font-semibold text-[#495057] dark:text-[#ececec]">
                  저자:
                  {singlePostData?.post?.bookInfo?.bookAuthors}
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

          <div className="prose max-w-full dark:prose-dark">
            <div
              id="content"
              className="font-Pretendard"
              dangerouslySetInnerHTML={{
                __html: singlePostData?.post?.body ? singlePostData?.post?.body : '',
              }}
            />
          </div>
        </div>
        <div className="col-span-2 mx2:hidden">
          <div className="sticky top-[20%]">
            <PostTableOfContents />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[812.5px]">
        <Suspense>
          <Comments
            commentCount={singlePostData?.post?.comments_count!}
            comments={singlePostData?.post?.comments!}
            postId={singlePostData?.post?.id!}
            isMine={singlePostData?.post?.user?.id == auth}
            currentId={auth}
            handleRefetch={handleRefetch}
          />
        </Suspense>
      </div>
      <div className="h-[40vh]"></div>
    </>
  );
}

export default PostPageViewWrapper;
