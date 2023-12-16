import { Remove_Post } from '@/lib/graphql/posts';
import useBookStore from '@/store/book';
import { Post, Maybe, Tag } from '@/types/apolloComponent'; // Import Maybe and Tag types
import { useApolloClient, useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { toast } from 'react-toastify';

function PostAuthControl({
  singlePostData,
  id,
  auth,
}: {
  singlePostData: { post: Post } | undefined;
  id: string | undefined;
  auth: string;
}) {
  const router = useRouter();

  const { setBook, setTitle, setBody, setTags, setPostId, setThumbnail } = useBookStore();

  const client = useApolloClient();

  const [removePost] = useMutation(Remove_Post, {
    onCompleted({}) {
      router.push('/');
    },
  });

  const handleSubmit = async (id: string | undefined) => {
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

  const getPostData = () => {
    setTitle(singlePostData?.post?.title || '');
    setBody(singlePostData?.post?.body || '');
    setTags(
      singlePostData?.post?.tags
        ?.map((e: Maybe<Tag>) => e?.tag?.name ?? '')
        .filter((name: string): name is string => !!name) || [],
    );
    setPostId(singlePostData?.post?.id || '');
    setThumbnail(singlePostData?.post?.thumbnail || '');

    setBook({
      author: singlePostData?.post?.bookInfo?.bookAuthors || '',
      description: singlePostData?.post?.bookInfo?.bookContent || '',
      pubDate: singlePostData?.post?.bookInfo?.pubDate || '',
      isbn: singlePostData?.post?.bookInfo?.bookIsbn || '',
      cover: singlePostData?.post?.bookInfo?.bookUrl || '',
      title: singlePostData?.post?.bookInfo?.bookTitle || '',
    });
  };

  return (
    <>
      {singlePostData?.post?.user?.id == auth ? (
        <div className="mx-auto mb-[1rem] mt-2 flex max-w-[812.5px] justify-end text-sm text-[#868E96]">
          <div className="mr-4">view: {singlePostData?.post?.views}</div>
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
    </>
  );
}

export default PostAuthControl;
