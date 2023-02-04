import React, { useEffect, useRef, useState } from 'react';
import useEditor2 from './hooks/useCreatePost';
import useSavedPosts from './hooks/useGetSavePosts';
import SavedPostItem from './SavePostItem';
import { Collapse, Grid as NextGrid, Avatar } from '@nextui-org/react';

export type TapProps = { value: string };

function SavePost({ value }: TapProps) {
  const { posts, loading } = useSavedPosts();

  if (loading) return <div>wait</div>;

  const isFilterData = value ? posts.filter(e => e?.title?.includes(value)) : posts;

  return (
    <div className=" ">
      <Collapse.Group divider={false}>
        <Collapse title={`임시 저장 글  (${isFilterData?.length})`} expanded>
          {isFilterData?.map(post => (
            <SavedPostItem post={post} key={post.id} />
          ))}
        </Collapse>
      </Collapse.Group>
    </div>
  );
}

export default SavePost;
