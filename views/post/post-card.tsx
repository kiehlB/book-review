'use client';

import * as React from 'react';
import { Post } from '../../types/apolloComponent';
import PostCardItem from './post-card-item';

interface PostCardProps {
  posts: Post[];
}

function PostCard({ posts }: PostCardProps) {
  return (
    <>
      {posts.map(post => {
        if (post) return <PostCardItem post={post} key={post.id} />;
      })}
    </>
  );
}

export default PostCard;
