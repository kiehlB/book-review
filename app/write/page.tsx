import useGetUser from '@/views/setting/hooks/use-get-user';
import PostPublishTemplate from '@/views/write/post-publish-template';
import WriteTemplate from '@/views/write/write-template';
import { cookies } from 'next/headers';

export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get('access_token');
  return (
    <main>
      <WriteTemplate token={token} />
      <PostPublishTemplate />
    </main>
  );
}
