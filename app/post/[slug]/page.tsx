import { headers } from 'next/headers';
import PostPageView from '@/components/view/post-view';

export type PostProps = {
  id: string;
};

function PostPage() {
  const headersList = headers();

  const header_url = headersList.get('x-url') || '';

  return (
    <>
      <PostPageView header_url={header_url} />
    </>
  );
}

export default PostPage;
