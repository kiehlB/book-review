import { PageLayout } from '@/components/layout/page-layout';
import PostPublishTemplate from '@/components/write/PostPublishTemplate';
import WriteTemplate from '@/components/write/write-template';

export default function Home() {
  return (
    <main>
      <WriteTemplate />
      <PostPublishTemplate />
    </main>
  );
}
