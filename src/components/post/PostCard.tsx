import * as React from 'react';
import clsx from 'clsx';
import PostCardItem, { PostCardSkeleton } from './PostCardItem';
import { Post } from '../../types/apolloComponent';

interface PostCardProps {
  posts: Post[];
  loading: boolean;
}

function PostCard({ posts, loading }: PostCardProps) {
  return (
    <>
      {posts.map((post, i) => {
        if (post) return <PostCardItem post={post} key={post.id} />;
      })}
      {loading && Array.from({ length: 8 }).map((_, i) => <PostCardSkeleton key={i} />)}
    </>
  );
}

export default PostCard;
