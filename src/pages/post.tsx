import PostTableOfContents from '../components/common/PostTableOfContent';
import useGetPost from '../components/write/hooks/usegetPost';
import { parseHeadings2, setHeadingId } from '../lib/heading';

export type PostProps = {};

const DummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

function Post({}: PostProps) {
  const { singlePostLoding, singlePostError, singlePostData } = useGetPost();

  const insertID = setHeadingId(singlePostData?.post?.body);

  console.log(insertID);

  if (singlePostLoding) return <div>k</div>;
  return (
    <div className="h-full">
      {/* <div className="border-2 border-red-500">
        <div dangerouslySetInnerHTML={{ __html: insertID }} />
      </div> */}

      <div className="border-2">
        <PostTableOfContents />
      </div>
    </div>
  );
}

export default Post;
