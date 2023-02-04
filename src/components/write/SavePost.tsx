import React, { useEffect, useRef, useState } from 'react';
import useEditor2 from './hooks/useCreatePost';
import useSavedPosts from './hooks/useGetSavePosts';
import SavedPostItem from './SavePostItem';
import { Collapse, Grid as NextGrid, Avatar } from '@nextui-org/react';

export type TapProps = { value: string };

function SavePost({ value }: TapProps) {
  const { posts, loading, onConfirmRemove } = useSavedPosts();

  if (loading) return <div>wait</div>;

  const isFilterData = value ? posts.filter(e => e?.title?.includes(value)) : posts;

  return (
    <div className="">
      <Collapse.Group divider={false}>
        <Collapse
          className="text-[#64748b] text-base font-bold"
          title={`임시 저장 글  (${isFilterData?.length})`}
          expanded>
          {isFilterData?.map(post => (
            <SavedPostItem post={post} key={post.id} onConfirmRemove={onConfirmRemove} />
          ))}
        </Collapse>
      </Collapse.Group>
    </div>
  );
}

export default SavePost;
