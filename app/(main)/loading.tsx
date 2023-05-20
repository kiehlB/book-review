import { PostGrid } from '@/components/layout/grid-layout';
import { PostCardSkeleton } from '@/components/post-grid/post-card-item';

export default function Loading() {
  return (
    <PostGrid className="mt-[1rem]">
      {Array.from({ length: 8 }).map((_, i) => (
        <PostCardSkeleton key={i} />
      ))}
    </PostGrid>
  );
}
