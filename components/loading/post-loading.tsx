import PostCardSkeleton from '@/views/post/post-card-skeleton';

export default function PostLoading() {
  return Array.from({ length: 8 }).map((_, i) => <PostCardSkeleton key={i} />);
}
