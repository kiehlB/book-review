import { PostGrid } from '../layout/grid-layout';
import { PostCardSkeleton } from '../post/post-card-item';

export default function PostLoading() {
  return Array.from({ length: 8 }).map((_, i) => <PostCardSkeleton key={i} />);
}
