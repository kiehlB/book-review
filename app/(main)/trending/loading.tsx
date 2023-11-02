import { PostCardSkeleton } from '@/components/post/post-card-item';

export default function PostLoading() {
  return Array.from({ length: 8 }).map((_, i) => <PostCardSkeleton key={i} />);
}
