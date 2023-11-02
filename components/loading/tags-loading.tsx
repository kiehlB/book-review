import { TagsSkeleton } from '../tags/tags-item';

export default function TagLoading() {
  return Array.from({ length: 8 }).map((_, i) => <TagsSkeleton key={i} />);
}
