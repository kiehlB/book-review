import useGetPost from '../components/write/hooks/usegetPost';
import { parseHeadings2 } from '../lib/heading';

export type PostProps = {};

function Post({}: PostProps) {
  const { singlePostLoding, singlePostError, singlePostData } = useGetPost();

  console.log(parseHeadings2(singlePostData?.post?.body));
  return (
    <div className="h-full">
      <div dangerouslySetInnerHTML={{ __html: singlePostData?.post?.body }} />
    </div>
  );
}

export default Post;
