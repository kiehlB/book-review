import useGetUser from '@/views/setting/hooks/use-get-user';
import PostPublishTemplate from '@/views/write/post-publish-template';
import WriteTemplate from '@/views/write/write-template';

export default function Home() {
  return (
    <main>
      <WriteTemplate />
      <PostPublishTemplate />
    </main>
  );
}
