import { PageLayout } from '@/components/layout/page-layout';
import PostViewLoading from '@/components/loading/post-view-loading';
import { PostPageSkeleton } from '@/views/post-view/post-skeleton';
import PostPageViewWrapper from '@/views/post-view/post-wrapper';
import { cookies, headers } from 'next/headers';
import { Suspense } from 'react';

function PostPage() {
  const headersList = headers();

  const header_url = headersList.get('x-url') || '';
  const cookieStore = cookies();
  const token = cookieStore.get('access_token');

  return (
    <PageLayout token={token}>
      <Suspense fallback={<PostPageSkeleton />}>
        <PostPageViewWrapper header_url={header_url} />;
      </Suspense>
    </PageLayout>
  );
}

export default PostPage;
