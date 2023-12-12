import PostCardSkeleton from '@/views/post/post-card-skeleton';

export default function PostViewLoading() {
  return Array.from({ length: 8 }).map((_, i) => <PostCardSkeleton key={i} />);
}
